// import AWS from "aws-sdk";
// import nodemailer from "nodemailer";
// import path from "path";
import formData from "form-data";
import axios from "axios";

export default async function handler(req, res) {
  try {
    const data = req.query;
    const { name, email } = data;
    // Basic Validation
    if (!(name && email)) {
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    //     const mailer = nodemailer.createTransport({
    //       host: process.env.AWS_SMTP_HOST,
    //       port: process.env.AWS_SMTP_PORT || 587,
    //       secure: false,
    //       auth: {
    //         user: process.env.AWS_SMTP_USER,
    //         pass: process.env.AWS_SMTP_PASSWORD,
    //       },
    //     });

    //     console.log("sendMail is about to be hit")

    //     mailer.sendMail(
    //       {
    //         from: process.env.SMTP_SENDER_EMAIL,
    //         to: data.email,
    //         subject: process.env.EMAIL_SUBJECT || "No Subject",
    //         text: `Hi ${data.name},
    // This is a test email from Prasurjya's /dwnldtaxguide API
    // Everything is working fine!..............

    // Regards
    // Taxnodes Team`,
    //       },
    //       function (error, info) {
    //         console.log("Callback function inside sendMail is hit, error, info: ", error, info)
    //         if (error) {
    //           console.log("Error in sendMail: ", error);
    //         } else if (info) {
    //           console.log("This is info", info);
    //         }
    //       }
    //     );

    // Freshdesk ticket creation
    // Using form-data (Freshdesk API accepts "Content-Type": "multipart/form-data")
    // Create a ticket with subject, type, customer info

    const ticketForm = new formData();
    ticketForm.append("name", name);
    ticketForm.append("email", email);
    ticketForm.append("subject", "Tax-Guide");
    ticketForm.append("type", "Tax-Guide");
    ticketForm.append("status", 2);
    ticketForm.append("priority", 1);
    ticketForm.append("description", "Tax-Guide");
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
    let ticket = await axios.request(ticketRequest);
    ticket = ticket.data; // ticket lies inside the data object (in response)
    console.log("Ticket creation response:", ticket);

    res.status(200).send({
      status: true,
      message: "Operation Succeeded",
    });
  } catch (error) {
    console.log("This is in catch block; error.message: ", error.message);
    res.status(400).send({
      status: false,
      message: "Operation Failed",
    });
  }
}
