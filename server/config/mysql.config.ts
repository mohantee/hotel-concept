import mysql from "mysql2";
import fs from "fs";
import path from "path";

const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "fazeclan",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  multipleStatements: true,
});

const pool = connection.promise();

// Seed initial data

console.log("Running SQL seed...");

const seedDatabase = async () => {
  const seedFilePath = path.join(__dirname, "init.sql");
  const seedQuery = fs.readFileSync(seedFilePath, { encoding: "utf-8" });

  await pool.query(seedQuery);
  await pool.end();
};

seedDatabase();

export default pool;
