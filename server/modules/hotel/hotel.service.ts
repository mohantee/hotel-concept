import { RowDataPacket } from "mysql2";
import pool from "../../config/mysql.config";
import {
  ADD_HOTEL,
  DELETE_HOTEL,
  GET_COUNTRY_CODE,
  GET_HOTELS,
  GET_LATEST_HOTEL_CODE,
} from "./hotel.queries";

interface Hotel extends RowDataPacket {
  hotel_code: string;
  hotel_name: string;
  city_code: number;
  city_name: string;
  country_code: number;
  country_name: string;
}

export async function getHotels() {
  const hotels = await pool.query<Hotel[]>(GET_HOTELS);
  return hotels[0];
}

export interface NewHotel {
  hotel_name: string;
  city_code: number;
  country_code: number;
  id: string;
}

export async function addHotel(data: NewHotel) {
  return await pool.query(ADD_HOTEL, [
    data.id,
    data.hotel_name,
    data.city_code,
    data.country_code,
  ]);
}

export async function deleteHotel(hotelCode: string) {
  return await pool.query(DELETE_HOTEL, [hotelCode]);
}

export async function getLastInsertedHotelCode() {
  return await pool.query(GET_LATEST_HOTEL_CODE);
}
