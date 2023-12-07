import { Router } from "express";
import {
  addHotelHandler,
  deleteHotelHandler,
  getHotelsHandler,
} from "./hotel.controller";

export const hotelRouter = Router();

hotelRouter.route("/").get(getHotelsHandler).post(addHotelHandler);

hotelRouter.route("/:id").delete(deleteHotelHandler);
