import { Document } from "mongoose";

export interface IReview extends Document {
  name: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}
