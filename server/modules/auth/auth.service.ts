import { RowDataPacket } from "mysql2";
import pool from "../../config/mysql.config";
import { CREATE_USER, USER_BY_EMAIL, USER_BY_USERNAME } from "./auth.queries";

interface User extends RowDataPacket {
  id: number;
  username: string;
  email: string;
  password: string;
}

export async function getUserByUsername(username: string) {
  const users = await pool.query<User[]>(USER_BY_USERNAME, [username]);
  console.log(users);
  return users[0][0];
}

export async function getUserByEmail(email: string) {
  const users = await pool.query<User[]>(USER_BY_EMAIL, [email]);
  return users[0][0];
}

interface CreateUser {
  email: string;
  username: string;
  password: string;
}

export async function createUser(data: CreateUser) {
  return await pool.query(CREATE_USER, [
    data.email,
    data.username,
    data.password,
  ]);
}
