1. Create User Entity (src/entities/User.ts)
Defines the database table for users.

Includes id, name, email, and password.

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}


2. Set up User Repository
--> Manages database operations for the User entity.

import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export const userRepository = AppDataSource.getRepository(User);



3. Create Authentication Routes (src/routes/auth.ts)
Handles user registration, login, and logout.

Uses bcrypt for password hashing and JWT for authentication.

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository";

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "supersecretkey";

// Register User
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await userRepository.findOneBy({ email });
  if (existingUser) return res.status(400).json({ message: "Email already in use" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = userRepository.create({ name, email, password: hashedPassword });
  await userRepository.save(user);

  res.status(201).json({ message: "User registered successfully" });
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userRepository.findOneBy({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true }).json({ message: "Logged in", token });
});

// Logout User
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
});

export default router;


4.Integrate Authentication Routes in Express (src/server.ts)
Connects the authentication logic to the Express app.

import authRoutes from "./routes/auth";

app.use("/auth", authRoutes);


5.start Server and test the API
pnpm ts-node src/index.ts


8. Generate and  Run Migration
generating a migration file
pnpm migration:generate src/migrations/InitMigration


running the migration
pnpm migration:run



Migrations help update the database schema to match your code. When you create an Events entity, the database doesn’t know about it until you generate and run a migration.
pnpm typeorm migration:generate -d src/data-source.ts src/migrations/The name of the created table
pnpm typeorm migration:run -d src/data-source.ts
