import AWS from "aws-sdk";
import nodemailer from "nodemailer";
import path from "path";

export default async function handler(req, res) {
  try {
    const data = req.query;
    // Basic Validation
    if (!(data.name && data.email)) {
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    const mailer = nodemailer.createTransport({
      host: process.env.AWS_SMTP_HOST,
      port: process.env.AWS_SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.AWS_SMTP_USER,
        pass: process.env.AWS_SMTP_PASSWORD,
      },
    });

    mailer.sendMail(
      {
        from: process.env.SMTP_SENDER_EMAIL,
        to: data.email,
        subject: process.env.EMAIL_SUBJECT || "No Subject",
        text: `Hi ${data.name},
This is a test email from Prasurjya's /dwnldtaxguide API
Everything is working fine!..............

Regards
Taxnodes Team`,
        attachments: [
          {
            filename: "TaxGuide.pdf",
            path: path.join(process.cwd(), "/assets/pdfs", "TaxGuide.pdf"),
          },
        ],
      },
      function (error, info) {
        if (error) {
          console.log("Error in sendMail: ", error);
        } else if (info) {
          console.log("This is info", info);
        }
      }
    );

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
