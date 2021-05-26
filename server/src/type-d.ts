import { IUserDoc } from "./interface/";

declare module "express-serve-static-core" {
  interface Request {
    user?: IUserDoc;
  }
}

export {};
