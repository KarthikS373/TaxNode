import dbConnect from "../../../lib/dbConnect";
import userModel from "../../../models/user";
import paymentModel from "../../../models/payment";
// const AWS = require("aws-sdk"); // TODO: PHASE2
const moment = require("moment");

const payu = require("../../../lib/payu")({
  key: process.env.PAYU_KEY,
  salt: process.env.PAYU_SALT,
});

const Cors = require("cors");

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const formidable = require("formidable");

export const config = {
  api: {
    bodyParser: false,
  },
};

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

// TODO: PHASE2
// const awsConfig = {
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// };

// const ses = new AWS.SES(awsConfig);

export default async function handler(req, res) {
  try {
    // Run the middleware
    await runMiddleware(req, res, cors);
    await dbConnect();

    let data = await new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });
    data = data.fields;

    // //! Ip address check
    // console.log("This is the ip", req.ip);
    // if (checkIp(req) === false) {
    //   return res.status(401).send({
    //     status: false,
    //     message: "Unauthorised access",
    //   });
    //   function checkIp(req) {
    //     const allowedIpArr = process.env.ALLOWED_IP.split(",");
    //     const ip =
    //       req.headers["some__________________imaginary_____________________ip"];
    //     // TODO: Use "X-Forwarded-For" if need the Ip address of the PayU; for loadbalancer's ip use req.ip
    //     return allowedIpArr.includes(ip) ? true : false;
    //   }
    // }

    //! Basic Validation
    // TODO : Check if this is required 🎯
    if (
      data.unmappedstatus &&
      data.phone &&
      data.txnid &&
      data.hash &&
      data.status &&
      data.curl &&
      data.firstname &&
      data.card_no &&
      data.furl &&
      data.productinfo &&
      data.DC &&
      data.amount &&
      data.field4 &&
      data.field3 &&
      data.field2 &&
      data.field9 &&
      data.email &&
      data.mihpayid &&
      data.surl &&
      data.card_hash &&
      data.field1
    ) {
      return res.status(400).send({
        status: false,
        message: "Missing value(s)",
      });
    }

    // TODO: VALIDATION (PHASE2)

    //! VERIFYING REVERSE HASH (Reverse hash is hash received after payment from payu)
    const isValidHash = payu.hasher.validateHash(data.hash, {
      txnid: data.txnid,
      amount: data.amount,
      productinfo: data.productinfo,
      firstname: data.firstname,
      email: data.email,
      status: data.status,
    });
    //TODO : Check what isValidHash value is and accordingly do error catching🎯🎯🎯
    // Considering isValidHash is Boolean (PHASE2)
    console.log("This is isValidhash", isValidHash);
    if (!isValidHash) {
      return res.status(401).send({
        status: false,
        message: "Payment Failed : Invalid Hash",
      });
    }

    //! Subscription details
    // TODO: the dates will change depending on plans (PHASE 2)
    const subscribed_on = moment().format("DD-MM-YYYY");
    const subscription_start = moment().format("DD-MM-YYYY");
    // date.setUTCFullYear(date.getUTCFullYear + 1); //TODO: Check if there can be improvements (like recharges: 12 AM) PHASE2 🎯
    // const subscription_end = date;

    //! Declaring below variables for storing responses
    let contactExists, contact, ticket, user;

    //! Checking if contact already exists
    // Here (Freshdesk API), the query string must be URL encoded
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
        email: data.email,
      },
    };
    contact = await axios.request(contactRequest);

    // Since the email address is unique, we will get only one contact in the list
    contact.data.length === 1
      ? (contactExists = true)
      : (contactExists = false);

    if (!contactExists) {
      // If contact doesn't exists =>
      //! Freshdesk contact creation
      const contactForm = new formData();
      contactForm.append("name", data.firstname);
      contactForm.append("email", data.email);
      contactForm.append("phone", data.phone);
      contactForm.append("mobile", data.phone); // We are putting the same value in both phone and mobile
      contactForm.append("custom_fields[customer_type]", "subscribed");
      contactForm.append("custom_fields[subscription_date]", subscribed_on);
      contactForm.append("custom_fields[subscription_amount]", data.amount);

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
      contact = await axios.request(request);
      contact = contact.data; // contact lies inside the data object (in response)
    } else if (contactExists) {
      contact = contact.data[0]; // Contact lies inside an array inside the data object (in response)

      // if contact exists and customer_type = subscribed => update subsccription date, subscription amount
      // if contact exists and customer_type = enquired => update customer_type = subscribed, subscription_date = new Date(), subscription amount = "PayU_amount"
      if (
        contact.customer_type === "subscribed" ||
        contact.customer_type === "enquired"
      ) {
        //! Freshdesk contact updation
        // Using form-data (Freshdesk API accepts "Content-Type": "multipart/form-data")

        const contactForm = new formData();
        contactForm.append("custom_fields[customer_type]", "subscribed");
        contactForm.append("custom_fields[subscription_date]", subscribed_on);
        contactForm.append("custom_fields[subscription_amount]", data.amount);

        const contactRequest = {
          url: `https://taxnodes.freshdesk.com/api/v2/contacts/${contact.id}`,
          headers: {
            Accept: "application/json",
          },
          method: "PUT",
          auth: {
            username: process.env.FRESHDESK_USERNAME,
            password: process.env.FRESHDESK_PASSWORD,
          },
          data: contactForm,
        };
        contact = await axios.request(contactRequest);
        contact = contact.data; //TODO: CHECK THIS ONCE
      }
    }

    //! Freshdesk ticket creation
    // Using form-data (Freshdesk API accepts "Content-Type": "multipart/form-data")
    // Create a ticket with subject = "welcome", ticket_type = "subscription", customer info = (id / email)
    const ticketForm = new formData();
    ticketForm.append("name", data.firstname);
    ticketForm.append("email", data.email);
    ticketForm.append("phone", data.phone);
    ticketForm.append("subject", "Welcome");
    ticketForm.append("type", "Subscription");
    ticketForm.append("status", 2);
    ticketForm.append("priority", 1);
    ticketForm.append("description", "---------SOME DEMO DESCRIPTION---------");

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
    ticket = ticket.data; // ticket lies inside the data object (in response)

    //! User creation along with subscription details
    user = await userModel.findOneAndUpdate(
      { email: data.email },
      {
        email: data.email,
        phone: data.phone,
        firstname: data.firstname,
        subscribed_on: subscribed_on,
        subscription_start: subscription_start,
        // subscription_end: subscription_end,
      },
      { new: true, upsert: true }
    );

    //! Payment creation
    createPayment = await paymentModel.create({
      user_id: user._id,
      unmappedstatus: data.unmappedstatus,
      phone: data.phone,
      tnxid: data.txnid,
      hash: data.hash,
      status: data.status,
      curl: data.curl,
      firstname: data.firstname,
      card_no: data.card_no,
      furl: data.furl,
      productinfo: data.productinfo,
      mode: data.DC,
      amount: data.amount,
      field4: data.field4,
      field3: data.field3,
      field2: data.field2,
      field9: data.field9,
      email: data.email,
      mihpayid: data.mihpayid,
      surl: data.surl,
      card_hash: data.card_hash,
      field1: data.field1,
    });

    //TODO: PHASE2 (! Sending email)
    // const params = {
    //   Source: process.env.SOURCE_EMAIL,
    //   Destination: {
    //     ToAddresses: [email],
    //   },
    //   Message: {
    //     Subject: {
    //       Charset: "UTF-8",
    //       Data: ``,
    //     },
    //   },
    //   Body: {
    //     HTML: {
    //       Charset: "UTF-8",
    //       Data: ``,
    //     },
    //   },
    // };
    // const emailSent = ses.sendEmail(params).promise();
    // emailSent
    //   .then((_data) => console.log("Email sent successfully"))
    //   .catch((error) => console.log(error));

    //! Figure out the response structure if any of created user, payment and email needs to be sent
    res.status(200).send({
      status: true,
      message: "-------------SOME----DEMO---MESSAGE-----------------",
      data: {
        contact: contact,
        ticket: ticket,
        user: user,
        payment: payment,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Internal Server Error (catch block)",
      error: error.message,
    });
  }
}

// module.exports = sendEmail;
