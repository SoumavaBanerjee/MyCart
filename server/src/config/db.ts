import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.info(`connected to db at ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
