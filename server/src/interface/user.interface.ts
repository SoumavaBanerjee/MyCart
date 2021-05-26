import { Document } from "mongoose";

// IUser to be used in express module augmentation. see types-d.ts
export interface IUser {
  name: string;
  email: string;
  password?: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IUserDoc extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  matchPassword: (password: string) => Promise<boolean>;
  createdAt?: Date;
  updatedAt?: Date;
}
