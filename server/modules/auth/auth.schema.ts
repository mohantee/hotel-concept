import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
});

export const registerSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    username: z.string(),
  }),
});
