import { z } from "zod";

export const addHotelSchema = z.object({
  body: z.object({
    hotel_name: z.string(),
    country_code: z.number(),
    city_code: z.number(),
  }),
});

export const deleteHotelSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});
