import { Router } from "express";
import {
  addHotelHandler,
  deleteHotelHandler,
  getHotelsHandler,
} from "./hotel.controller";
import { validate } from "../../middlewares/validate";
import { addHotelSchema, deleteHotelSchema } from "./hotel.schema";

export const hotelRouter = Router();

hotelRouter
  .route("/")
  .get(getHotelsHandler)
  .post(validate(addHotelSchema), addHotelHandler);

hotelRouter
  .route("/:id")
  .delete(validate(deleteHotelSchema), deleteHotelHandler);
