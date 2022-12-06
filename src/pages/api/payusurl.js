import dbConnect from "../../../lib/dbConnect";
import userModel from "../../../models/user";
import paymentModel from "../../../models/payment";
import moment from "moment";
import axios from "axios";
import formData from "form-data";

// PayU
const payu = require("../../../lib/payu")({
  key: process.env.PAYU_KEY,
  salt: process.env.PAYU_SALT,
});

// CORS
const Cors = require("cors");
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Formidable
const formidable = require("formidable");
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      console.log("This is not a POST request");
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    // Run the middleware
    await runMiddleware(req, res, cors); // CORS
    await dbConnect(); // Database connection

    // Formidable
    let data = await new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });
    data = data.fields;

    const {
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      status,
      phone,
      mihpayid,
      mode,
      unmappedstatus,
      cardCategory,
      discount,
      net_amount_debit,
      addedon,
      lastname,
      address1,
      address2,
      city,
      state,
      country,
      zipcode,
      udf1,
      udf2,
      udf3,
      udf4,
      udf5,
      udf6,
      udf7,
      udf8,
      udf9,
      udf10,
      hash,
      field1,
      field2,
      field3,
      field4,
      field5,
      field6,
      field7,
      field8,
      field9,
      payment_source,
      PG_TYPE,
      bank_ref_num,
      bankcode,
      error,
      error_Message,
      name_on_card,
      cardnum,
      cardhash,
    } = data;

    //! Redirection:
//     res.redirect(301, "/thankYou");

    // Basic Validation for those fields which are required for calculating verifying reverse hash
    if (txnid && amount && productinfo && firstname && email && status) {
      if (productinfo === "advisory") {
        //! VERIFYING REVERSE HASH (Reverse hash is hash received after payment from payu)
        const isValidHash = payu.hasher.validateHash(hash, {
          txnid: txnid,
          amount: amount,
          productinfo: productinfo,
          firstname: firstname,
          email: email,
          status: status,
        });
        console.log("This is isValidhash", isValidHash);
        if (isValidHash) {
          // Subscription details
          const subscribed_on = moment().format("DD-MM-YYYY");
          const subscription_start = moment().format("DD-MM-YYYY"); //TODO: Is this required when we have subscribed_on

          // Declaring below variables for storing responses
          let contactExists, contact, ticket, user, payment;

          // Checking if contact already exists
          // Freshdesk API conditions => query string must be URL encoded
          const contactRequest = {
            url: "https://taxnodes.freshdesk.com/api/v2/contacts",
            headers: {
              Accept: "application/json",
              "accept-encoding": null,
            },
            method: "GET",
            auth: {
              username: process.env.FRESHDESK_USERNAME,
              password: process.env.FRESHDESK_PASSWORD,
            },
            params: {
              email: email,
            },
          };
          console.log("Req to contactreq:", contactRequest)
          contact = await axios.request(contactRequest);
          console.log("REsponse:", contact)

          // Since the email address is unique, we will get only one contact in the list
          contact?.data?.length === 1
            ? (contactExists = true)
            : (contactExists = false);

          if (!contactExists) {
            // If contact doesn't exists =>
            // Freshdesk contact creation
            const contactForm = new formData();
            contactForm.append("name", firstname);
            contactForm.append("email", email);
            contactForm.append("phone", phone);
            contactForm.append("mobile", phone); // We are putting the same value in both phone and mobile
            contactForm.append("custom_fields[customer_type]", "subscribed");
            contactForm.append(
              "custom_fields[subscription_date]",
              subscribed_on
            );
            contactForm.append("custom_fields[subscription_amt]", amount);

            const request = {
              url: "https://taxnodes.freshdesk.com/api/v2/contacts",
              headers: {
                Accept: "application/json",
              },
              method: "POST",
              auth: {
                username: process.env.FRESHDESK_USERNAME,
                password: process.env.FRESHDESK_PASSWORD,
              },
              data: contactForm,
            };
            console.log("Req to create contact:", request)
            contact = await axios.request(request);
            console.log("Response from create contact:", contact)
            contact = contact.data; // contact lies inside the data object (in response)
          } else if (contactExists) {
            // If contact already exists =>
            contact = contact.data[0]; // Contact lies inside an array inside the data object (in response)

            // if contact exists and customer_type = subscribed => update subscription_date, subscription_amt
            // if contact exists and customer_type = enquired => update customer_type = subscribed, subscription_date, subscription_amt
            if (
              contact.custom_fields.customer_type === "subscribed" ||
              contact.custom_fields.customer_type === "enquired"
            ) {
              // Freshdesk contact updation
              // Using form-data (Freshdesk API accepts "Content-Type": "multipart/form-data")
              const contactForm = new formData();
              contactForm.append("custom_fields[customer_type]", "subscribed");
              contactForm.append(
                "custom_fields[subscription_date]",
                subscribed_on
              );
              contactForm.append("custom_fields[subscription_amt]", amount);
              console.log("Contact form if contact exist: ", contactForm)

              const contactRequest = {
                url: `https://taxnodes.freshdesk.com/api/v2/contacts/${contact.id}`,
                headers: {
                  Accept: "application/json",
                  "accept-encoding": null,
                },
                method: "PUT",
                auth: {
                  username: process.env.FRESHDESK_USERNAME,
                  password: process.env.FRESHDESK_PASSWORD,
                },
                data: contactForm,
              };

              contact = await axios.request(contactRequest);
              contact = contact.data;
              console.log("contact update response: ", contact)
            }
          }

          // Freshdesk ticket creation
          // Using form-data (Freshdesk API accepts "Content-Type": "multipart/form-data")
          // Create a ticket with subject, type, customer info
          const ticketForm = new formData();
          ticketForm.append("name", firstname);
          ticketForm.append("email", email);
          ticketForm.append("phone", phone);
          ticketForm.append("subject", "Welcome");
          ticketForm.append("type", "Subscription");
          ticketForm.append("status", 2);
          ticketForm.append("priority", 1);
          ticketForm.append("description", "Demo Description");
          ticketForm.append("group_id", process.env.SUBSCRIBED_GROUP_ID);
          console.log("ticket creation:", ticketForm)

          const ticketRequest = {
            url: "https://taxnodes.freshdesk.com/api/v2/tickets",
            headers: {
              Accept: "application/json",
            },
            method: "POST",
            auth: {
              username: process.env.FRESHDESK_USERNAME,
              password: process.env.FRESHDESK_PASSWORD,
            },
            data: ticketForm,
          };
          ticket = await axios.request(ticketRequest);
          console.log("Ticket creation response:", ticket)
          ticket = ticket.data; // ticket lies inside the data object (in response)

          // User creation along with subscription details
          user = await userModel.findOneAndUpdate(
            { email: email },
            {
              email: email,
              phone: phone,
              firstname: firstname,
              subscribed_on: subscribed_on,
              subscription_start: subscription_start, // TODO: Is this field required when there's subscribed_on already!
            },
            { new: true, upsert: true }
          );

          // Payment updation
          payment = await paymentModel.findOneAndUpdate(
            { txnid: txnid },
            {
              mihpayid: mihpayid,
              mode: mode,
              status: status,
              unmappedstatus: unmappedstatus,
              txnid: txnid,
              amount: amount,
              cardCategory: cardCategory,
              discount: discount,
              net_amount_debit: net_amount_debit,
              addedon: addedon,
              productinfo: productinfo,
              firstname: firstname,
              lastname: lastname,
              address1: address1,
              address2: address2,
              city: city,
              state: state,
              country: country,
              zipcode: zipcode,
              email: email,
              phone: phone,
              udf1: udf1,
              udf2: udf2,
              udf3: udf3,
              udf4: udf4,
              udf5: udf5,
              udf6: udf6,
              udf7: udf7,
              udf8: udf8,
              udf9: udf9,
              udf10: udf10,
              hash: hash,
              field1: field1,
              field2: field2,
              field3: field3,
              field4: field4,
              field5: field5,
              field6: field6,
              field7: field7,
              field8: field8,
              field9: field9,
              payment_source: payment_source,
              PG_TYPE: PG_TYPE,
              bank_ref_num: bank_ref_num,
              bankcode: bankcode,
              error: error,
              error_Message: error_Message,
              name_on_card: name_on_card,
              cardnum: cardnum,
              cardhash: cardhash,
              confirmed_status: true,
            },
            { new: true, upsert: true }
          );

          console.log({
            contact: contact,
            ticket: ticket,
            user: user,
            payment: payment,
          });
              //! Redirection:
            res.redirect(301, "/thankYou");
        } else {
          // This is when the reverse hash is invalid
          console.log("Invalid Hash");
          // TODO:  Payment updation : update { confirmed_status : false } (payment document (MongoDB)) ?
          // payment = await paymentModel.findOneAndUpdate(
          //   { txnid: txnid },
          //   {
          //     mihpayid: mihpayid,
          //     mode: mode,
          //     status: status,
          //     unmappedstatus: unmappedstatus,
          //     txnid: txnid,
          //     amount: amount,
          //     cardCategory: cardCategory,
          //     discount: discount,
          //     net_amount_debit: net_amount_debit,
          //     addedon: addedon,
          //     productinfo: productinfo,
          //     firstname: firstname,
          //     lastname: lastname,
          //     address1: address1,
          //     address2: address2,
          //     city: city,
          //     state: state,
          //     country: country,
          //     zipcode: zipcode,
          //     email: email,
          //     phone: phone,
          //     udf1: udf1,
          //     udf2: udf2,
          //     udf3: udf3,
          //     udf4: udf4,
          //     udf5: udf5,
          //     udf6: udf6,
          //     udf7: udf7,
          //     udf8: udf8,
          //     udf9: udf9,
          //     udf10: udf10,
          //     hash: hash,
          //     field1: field1,
          //     field2: field2,
          //     field3: field3,
          //     field4: field4,
          //     field5: field5,
          //     field6: field6,
          //     field7: field7,
          //     field8: field8,
          //     field9: field9,
          //     payment_source: payment_source,
          //     PG_TYPE: PG_TYPE,
          //     bank_ref_num: bank_ref_num,
          //     bankcode: bankcode,
          //     error: error,
          //     error_Message: error_Message,
          //     name_on_card: name_on_card,
          //     cardnum: cardnum,
          //     cardhash: cardhash,
          //     confirmed_status: false,
          //   },
          //   { new: true, upsert: true }
          // );
          // console.log({ payment: payment });
              //! Redirection:
          res.redirect(301, "/thankYou");
        }
      } else {
        // This is when productinfo is not advisory
        console.log("The productinfo is not advisory"); //TODO: is it required to flag confirmed_status as false ?
      }
    } else {
      // This is when basic validation fails
      console.log("Missing value(s)");
          //! Redirection:
        res.redirect(301, "/thankYou");
    }
  } catch (error) {
    console.log(
      "This is in catch block; error.message: ",
      error?.response?.data
    );
        //! Redirection:
    res.redirect(301, "/thankYou");
  }
}
