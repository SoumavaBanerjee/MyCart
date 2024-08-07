import dotenv from "dotenv";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);

    if (process.env.NODE_ENV === "production")
      console.info(`connected to db at ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export const connectLocalDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_LOCAL_URI}`);
    if (process.env.NODE_ENV === "dev")
      console.info(`connected to db at ${process.env.MONGO_LOCAL_URI}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
