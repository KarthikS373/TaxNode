import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema(
  {
    user_id: { type: ObjectId, required: true },
    unmappedstatus: String,
    phone: Number,
    txnid: String,
    hash: String,
    status: String,
    curl: String,
    firstname: String,
    card_no: String,
    furl: String,
    productinfo: String,
    mode: String,
    amount: String,
    field4: String,
    field3: String,
    field2: String,
    field9: String,
    email: String,
    mihpayid: String,
    surl: String,
    card_hash: String,
    field1: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    versionKey: false,
  }
);

export default mongoose.models.payment || mongoose.model("payment", schema);
