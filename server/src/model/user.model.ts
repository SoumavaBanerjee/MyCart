import mongoose, { Schema } from "mongoose";
import { IUserDoc } from "../interface";
import bcrypt from "bcryptjs";

const UserSchema = new Schema<IUserDoc>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Your email cannot be blank"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Your password cannot be blank"],
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

UserSchema.pre<IUserDoc>("save", async function (this: IUserDoc, next: any) {
  // in case of updates, don't hash password if not modified
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model<IUserDoc>("User", UserSchema);
export default User;
