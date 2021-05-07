import mongoose, { Schema } from "mongoose";
import { IProduct, IReview } from "../interface";

const ReviewSchema: Schema<IReview> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      reuired: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const ProductSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    catagory: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [ReviewSchema],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
