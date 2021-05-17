import mongoose, { Schema } from "mongoose";
import { IUser } from "../interface";
import bcrypt from "bcryptjs";

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
  let isValidPassword = await bcrypt.compare(enteredPassword, this.password);
  return isValidPassword;
};

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
