const formData = require("form-data");
const axios = require("axios");
const short = require("short-uuid");

const payu = require("../../../lib/payu")({
  key: process.env.PAYU_KEY,
  salt: process.env.PAYU_SALT,
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

//! DEFAULT FUNCTION
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

    //! Basic Validation
    if (!(data?.firstname && data?.email && data?.phone && data?.state)) {
      console.log("Error: Missing Value(s)");
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    //TODO: PHASE2 What about address1 and country in case of cardless emi option ?
    //TODO: PHASE2 DATA VALIDATION for security

    //! Generating txnid
    let txnid = data.email.substring(0, 3) + short.generate();
    // error handling: txnid max length allowed = 25
    if (txnid.length > 25) {
      txnid = txnid.substring(0, 25);
    }

    // Amount
    const amount = (
      parseInt(process.env.AMOUNT) -
      parseInt(process.env.DISCOUNT) * 1.18
    ).toString();

    //! Generating hash
    const hash = payu.hasher.generateHash({
      txnid: txnid,
      amount: amount,
      productinfo: process.env.PRODUCT_INFO,
      firstname: data.firstname,
      email: data.email,
    });

    const form = new formData();
    form.append("key", process.env.PAYU_KEY);
    form.append("txnid", txnid);
    form.append("amount", amount);
    form.append("productinfo", process.env.PRODUCT_INFO);
    form.append("firstname", data.firstname);
    form.append("email", data.email);
    form.append("phone", data.phone);
    form.append("state", data.state);
    form.append("surl", process.env.PAYU_SURL);
    form.append("furl", process.env.PAYU_FURL);
    form.append("hash", hash);

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
