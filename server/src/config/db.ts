import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    console.info(`connected to db at ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export const connectLocalDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_LOCAL_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.info(`connected to db at ${process.env.MONGO_LOCAL_URI}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
