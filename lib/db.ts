import mysql from "mysql2/promise";

export async function dbConnection() {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "next_login_db",
  });
}