"use server";

import { User } from "./models";
import { connectDb } from "./utils";

import { contactProps } from "@/types";

export const addUser = async (formData: FormData): Promise<contactProps> => {
  const { name, email, mobile, desc } = Object.fromEntries(formData.entries());

  try {
    await connectDb(); // Ensure connectDb is awaited
    const newUser = new User({
      name,
      email,
      mobile,
      desc,
    });

    const savedUser = await newUser.save();

    return savedUser.toObject() as contactProps;

    return savedUser.toObject() as contactProps; // Convert Mongoose document to plain object and cast to contactProps
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw new Error("Failed to add user");
  }
};
