import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  matchPassword: (password: string) => Promise<boolean>;
  createdAt?: Date;
  updatedAt?: Date;
}
