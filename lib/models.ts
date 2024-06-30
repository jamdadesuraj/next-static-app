import mongoose, { Schema, Document, Model } from "mongoose";

import { contactProps } from "./../types/index";

// Define the contactProps interface extending from mongoose.Document
interface IContactProps extends Document, contactProps {}

const userSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    mobile: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User: Model<IContactProps> =
  mongoose.models.User || mongoose.model<IContactProps>("User", userSchema);
