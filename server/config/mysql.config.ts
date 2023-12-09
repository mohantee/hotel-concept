import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import path from "path";

const SEED_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true,
};

const seedFilePath = path.join(__dirname, "init.sql");
const seedQuery = fs.readFileSync(seedFilePath, { encoding: "utf-8" });
const seedConnection = mysql.createConnection(SEED_CONFIG);

seedConnection.query(seedQuery);
seedConnection.end();

const DB_CONFIG = { ...SEED_CONFIG, database: process.env.DB_NAME };

const connection = mysql.createPool(DB_CONFIG);

const pool = connection.promise();

export default pool;
