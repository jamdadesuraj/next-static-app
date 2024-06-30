import mongoose from "mongoose";

let isConnected: boolean;

export const connectDb = async () => {
  if (isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URL as string, {
      dbName: "next-static-app",
    });

    isConnected = db.connections[0].readyState === 1; // Updated to check if readyState is 1 (connected)
  } catch (error) {
    throw new Error("Failed to connect to the database");
  }
};
