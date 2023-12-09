import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import path from "path";

const CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3001,
  multipleStatements: true,
};

const connection = mysql.createPool(CONFIG);

const seedFilePath = path.join(__dirname, "init.sql");
const seedQuery = fs.readFileSync(seedFilePath, { encoding: "utf-8" });

connection.query(seedQuery, (err) => {
  if (err) console.log(err);
});

const pool = connection.promise();

export default pool;
