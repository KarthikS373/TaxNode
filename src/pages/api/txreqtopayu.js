import formData from "form-data";
import axios from "axios";
import short from "short-uuid";
import dbConnect from "../../../lib/dbConnect";
import paymentModel from "../../../models/payment";

// PayU
const payu = require("../../../lib/payu")({
  key: process.env.PAYU_KEY,
  salt: process.env.PAYU_SALT,
});

// Formidable
const formidable = require("formidable");
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    let data = await new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });
    data = data.fields;
    const { firstname, email, phone, state, coupon } = data;

    //! Basic Validation
    if (!(firstname && email && phone && state)) {
      console.log("Error: Missing Value(s)");
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    //TODO: PHASE2 DATA VALIDATION for address1 and country in case of cardless EMI option
    //TODO: PHASE2 DATA VALIDATION for security

    // txnid
    let txnid = email.substring(0, 3) + short.generate();
    // error handling: txnid max length allowed = 25
    if (txnid.length > 25) {
      txnid = txnid.substring(0, 25);
    }

    // amount
    const couponDiscount =
      coupon === process.env.COUPON ? process.env.COUPON_DISCOUNT : 0;
    const amount = Number(
      Number(
        Number(process.env.AMOUNT) -
          Number(process.env.DISCOUNT) -
          Number(couponDiscount)
      ) * 1.18
    )
      .toFixed(2)
      .toString();

    // productinfo
    const productinfo = process.env.PRODUCT_INFO;

    // surl
    const surl = process.env.PAYU_SURL;

    // furl
    const furl = process.env.PAYU_FURL;

    // hash
    const hash = payu.hasher.generateHash({
      txnid: txnid,
      amount: amount,
      productinfo: process.env.PRODUCT_INFO,
      firstname: firstname,
      email: email,
    });

    console.log("This is hash", hash);

    //! Initiating transaction request to PayU
    const form = new formData();
    form.append("key", process.env.PAYU_KEY);
    form.append("txnid", txnid);
    form.append("amount", amount);
    form.append("productinfo", productinfo);
    form.append("firstname", firstname);
    form.append("email", email);
    form.append("phone", phone);
    form.append("state", state);
    form.append("surl", surl);
    form.append("furl", furl);
    form.append("hash", hash);
    console.log("SURL: ", surl, "\nFURL: ", furl);

    const request = {
      url: process.env.PAYU_URL,
      headers: {
        Accept: "application/json",
      },
      method: "POST",
      data: form,
    };
    const response = await axios.request(request);
    if (response?.request?.res?.responseUrl) {
      //! Extra code added after webhook didn't work--------------------------------
      await dbConnect(); // Database connection
      // Storing only those fields in the database which are required (For security)
      await paymentModel.create({
        txnid: txnid,
        amount: amount,
        productinfo: productinfo,
        firstname: firstname,
        email: email,
        phone: phone,
        state: state,
        surl: surl,
        furl: furl,
        hash: hash,
        confirmed_status: null,
      });
      //! --------------------------------------------------------------------------

      console.log(
        "This is the responseUrl: ",
        response?.request?.res?.responseUrl
      );
      return res.status(200).send({
        status: true,
        responseUrl: response?.request?.res?.responseUrl,
        message: "Operation Succeeded",
      });
    }
    res.status(400).send({
      status: false,
      message: "Operation Failed",
    });
  } catch (error) {
    console.log("This is in catch block; error.message: ", error.message);
    res.status(500).send({
      status: false,
      message: "Operation Failed",
    });
  }
}
