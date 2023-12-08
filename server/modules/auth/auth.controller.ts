import { Request, Response } from "express";
import { createUser, getUserByEmail, getUserByUsername } from "./auth.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// sign token helper
const secret = process.env.SECRET as string;
function signToken(data: any) {
  return jwt.sign(data, secret, { expiresIn: "1d" });
}

export async function loginHandler(req: Request, res: Response) {
  const { username, password } = req.body;
  try {
    const user = await getUserByUsername(username);

    if (!user) {
      return res
        .status(404)
        .send({ message: "Username or password incorrect" });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      return res
        .status(403)
        .send({ message: "Username or password incorrect" });
    }

    const token = signToken({ username, email: user.email });

    res.header("Authorization", "Bearer" + token);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "development" ? true : "none",
      secure: process.env.NODE_ENV === "development" ? false : true,
      maxAge: 1 * 60 * 60 * 24 * 1000, // 1 day
    });

    return res
      .status(200)
      .send({ token, user: { username, email: user.email } });
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function createAccountHandler(req: Request, res: Response) {
  const { email, username, password } = req.body;

  try {
    const userByEmail = await getUserByEmail(email);
    const userByUsername = await getUserByUsername(username);

    if (userByUsername || userByEmail) {
      return res
        .status(409)
        .send({ message: "Username or Email already exists" });
    }

    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    await createUser({ ...req.body, password: hashedPassword });

    const token = signToken({ username, email });

    return res.status(201).send({ token, user: { username, email } });
  } catch (error) {
    return res.status(400).send(error);
  }
}
