import express, { Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { hotelRouter } from "./modules/hotel/hotel.route";
import { authRouter } from "./modules/auth/auth.route";

const app = express();

app.set("trust proxy", 1);
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/healthcheck", (_, res: Response) => {
  return res.status(200).json({ message: "OK" });
});

app.use("/hotel", hotelRouter);
app.use("/auth", authRouter);

export default app;
