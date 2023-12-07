import { Request, Response } from "express";
import {
  NewHotel,
  addHotel,
  deleteHotel,
  getHotels,
  getLastInsertedHotelCode,
} from "./hotel.service";
import { incrementHotelCode } from "../../helpers/incrementHotelCode";

export async function getHotelsHandler({}, res: Response) {
  try {
    const hotels = await getHotels();
    return res.status(200).json(hotels);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function addHotelHandler(req: Request, res: Response) {
  const newHotel = req.body as NewHotel;

  try {
    // @ts-ignore
    const lastInsertedHotelCode = (await getLastInsertedHotelCode())[0][0]
      .id as string;

    const nextHotelCode = incrementHotelCode(lastInsertedHotelCode);
    newHotel.id = nextHotelCode;

    await addHotel(newHotel);
    return res.status(201).json({ message: "Hotel successfully created" });
  } catch (error) {
    return res.status(422).json(error);
  }
}

export async function deleteHotelHandler(req: Request, res: Response) {
  const hotelCode = req.params.id as string;
  try {
    await deleteHotel(hotelCode);
    return res.status(200).json({ message: "Hotel successfully deleted" });
  } catch (error) {
    return res.status(200).json(error);
  }
}
