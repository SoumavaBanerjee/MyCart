import mongoose from "mongoose";
import { connectDB, connectLocalDB } from "./config/db";

import dotenv from "dotenv";
import User from "./model/user.model";
import Product from "./model/product.model";

import productData from "./data/mock-products";
import { mockUsers } from "./data/user";
import Order from "./model/order.model";

dotenv.config();

connectDB();

/**
 * imports seeder data to MongoDB Atlas
 */
const importData = async () => {
  try {
    // delete stuff before inserting new stuff

    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    // insert new stuff
    const createdUsers = await User.insertMany(mockUsers);

    // extract admin user from DB (first in the array). get it into our mock products array.
    const adminUser = createdUsers[0]._id;
    const sampleProducts = productData.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);
    console.info("data imported");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// destroy all data in mongoDB database
const destroyData = async () => {
  try {
    // delete stuff
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.info("data destroyed");
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
