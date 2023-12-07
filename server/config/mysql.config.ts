import mysql from "mysql2";
// import fs from "fs";
// import path from "path";

const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "fazeclan",
  database: "hotel",
  multipleStatements: true,
});

const pool = connection.promise();

export default pool;

// Seed initial data

// console.log("Running SQL seed...");
//
// const seedDatabase = async () => {
//   const seedFilePath = path.join(__dirname, "init.sql");
//   const seedQuery = fs.readFileSync(seedFilePath, { encoding: "utf-8" });
//
//   await pool.query(seedQuery);
//   await pool.end();
// };
//
// seedDatabase();
