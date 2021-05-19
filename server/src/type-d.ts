import { IUser } from "./interface/";

declare module "express-serve-static-core" {
  interface Request {
    user?: IUser;
  }
}

export {};
