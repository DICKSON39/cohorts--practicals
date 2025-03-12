import db from "../config/db";
import bcrypt from "bcryptjs";
import pool from "../config/db";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  return pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
    [username, email, password]
  );
};

export const getUserByEmail = async (email: string) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    return result; // Return the full query result (which includes `rows`)
  } catch (err) {
    console.error("Error fetching user by email:", err);
    throw err; // Throw the error for proper handling
  }
};
