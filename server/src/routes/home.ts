import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json({
    message: "This is home route",
  });
});

export { router as homeRouter };
