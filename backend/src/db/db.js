import mongoose from "mongoose";
import { DB_NAME, DB_URL } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(DB_URL, {
      dbName: DB_NAME
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
