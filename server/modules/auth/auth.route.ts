import { Router } from "express";
import { createAccountHandler, loginHandler } from "./auth.controller";
import { validate } from "../../middlewares/validate";
import { loginSchema, registerSchema } from "./auth.schema";

export const authRouter = Router();

authRouter.route("/login").post(validate(loginSchema), loginHandler);

authRouter
  .route("/register")
  .post(validate(registerSchema), createAccountHandler);
