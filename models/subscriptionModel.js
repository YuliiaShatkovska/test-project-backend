import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Subscription = model("subscription", subscriptionSchema);

export default Subscription;
