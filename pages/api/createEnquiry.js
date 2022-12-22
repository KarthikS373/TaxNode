import model from "../../models/user";
import axios from "axios";
import formData from "form-data";
import moment from "moment";
import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const data = req.query;
    //! Basic Validation
    if (!(data?.email && data?.phone)) {
      console.log("Error: Missing Value(s)");
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }
    // Declaring below variables for storing responses
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
      // contact does not exists => create a new contact with customer_type = enquired & enquired_on = current Date
      //! Freshdesk contact creation
      // Using form-data (Freshdesk API accepts "Content-Type": "multipart/form-data")
      const contactForm = new formData();
      contactForm.append("name", data?.firstname || "Valued Customer"); // TODO: Replace firstname with full name (maybe firstname + lastname)🎯
      contactForm.append("email", data.email);
      contactForm.append("phone", data.phone);
      contactForm.append("mobile", data.phone); // We are putting the same value in both phone and mobile
      contactForm.append("custom_fields[customer_type]", "enquired");
      contactForm.append(
        "custom_fields[enquiry_date]",
        moment().format("DD-MM-YYYY")
      );

      const contactRequest = {
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
      contact = await axios.request(contactRequest);
      contact = contact.data; // contact lies inside the data object (in response)
    } else if (contactExists) {
      //TODO: PHASE2 handle this seperately (try catch) if goes into catch then create a new contact without phone and mobile!
      contact = contact.data[0]; // contact lies inside an array inside the data object (in response)
    }

    //! Freshdesk ticket creation
    // Using form-data (Freshdesk API accepts "Content-Type": "multipart/form-data")
    const ticketForm = new formData();
    ticketForm.append("name", data?.firstname || "Valued Customer"); // TODO: Replace firstname with full name (maybe firstname + lastname)🎯
    ticketForm.append("email", data.email);
    ticketForm.append("phone", data.phone);
    ticketForm.append("subject", "Enquiry");
    ticketForm.append("type", "Enquiry");
    ticketForm.append("status", 2);
    ticketForm.append("priority", 1);
    ticketForm.append("description", "---------SOME DEMO DESCRIPTION---------");
    ticketForm.append("group_id", process.env.ENQUIRED_GROUP_ID);

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

    //! User creation
    user = await model.findOneAndUpdate(
      { email: data.email },
      {
        email: data.email,
        phone: data.phone,
        firstname: data?.firstname || "Valued Customer",
        enquired_on: moment().format("DD-MM-YYYY"),
      },
      {
        new: true,
        upsert: true,
      }
    );

    console.log({
      contact: contact,
      ticket: ticket,
      user: user,
    });
    res.status(200).send({
      status: true,
      message: "Operation Succeeded",
    });
  } catch (error) {
    console.log("This is in catch block; error.message: ", error.message);
    // Handling eventual consistency of FreshDesk APIs: Recreating the error
    // - Keep the phone same and enter a new email (Fire two back to back requests)
    // - Log the error using: error.response.data here
    res.status(500).send({
      status: false,
      message: "Operation Failed",
    });
  }
}