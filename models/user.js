import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    phone: String,
    firstname: String,
    enquired_on: String,
    subscribed_on: String,
    subscription_start: String,
    subscription_end: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    versionKey: false,
  }
);

export default mongoose.models.user || mongoose.model("user", schema);
