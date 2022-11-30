require("dotenv").config({ path: "./.env" });
const express = require("express");
const multer = require("multer");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then((_result) => console.log("MongoDb is connected / taxnodes"))
  .catch((err) => console.log(err));

const createEnquiry = require("./src/pages/api/createEnquiry");
const txreqtopayu = require("./src/pages/api/txreqtopayu");
const webhook = require("./src/pages/api/webhook");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any());

app.post("/createEnquiry", createEnquiry);
app.post("/txreqtopayu", txreqtopayu);
app.post("/webhook", webhook);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Express is running on PORT: `, process.env.PORT || 3000)
);
