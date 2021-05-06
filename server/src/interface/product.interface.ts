import { Document } from "mongoose";
import { IUser } from "./user.interface";

export interface IProduct extends Document {
  user: IUser["_id"];
  name: string;
  image: string;
  description: string;
  brand?: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  createdAt: Date;
  updatedAt: Date;
}
