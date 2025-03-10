import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { createUser, getUserByEmail } from "../models/userModel";
import pool from "../config/db";
import { fill, filter } from "lodash";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await getUserByEmail(email);

    if (existingUser.rows.length > 0) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await createUser(username, email, hashedPassword);
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

export const login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
  
      // Input validation
      if (!email || !password) {
         res.status(400).json({ message: "Email and password are required" });
         return
      }
  
      // Fetch user from the database
      const userQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      if (userQuery.rows.length === 0) {
         res.status(404).json({ message: "User not found" });
         return
      }
  
      const user = userQuery.rows[0];
  
      // Compare passwords
      
  
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
      });
  
      // Return token and user data (excluding sensitive fields)
      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

export const users = async (req: Request, res: Response) => {
  const { email, password } = req.params;

  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal error" });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const checkUser = await pool.query(
      "SELECT * FROM public.users WHERE id = $1",
      [id]
    );
    if (checkUser.rows.length === 0) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    await pool.query("DELETE FROM public.users WHERE id = $1", [id]);
    res.json({ message: "User deleted successful" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
