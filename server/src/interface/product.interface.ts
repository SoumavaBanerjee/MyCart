import { Document } from "mongoose";
import { IUser } from "./user.interface";
import { IReview } from "./review.interface";

export interface IProduct extends Document {
  user: IUser["_id"];
  name: string;
  image: string;
  description: string;
  brand?: string;
  price: number;
  countInStock: number;
  rating: number;
  reviews: [IReview];
  numReviews: number;
  createdAt: Date;
  updatedAt: Date;
}
