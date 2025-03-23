import express from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "supersecretkey";

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const userRepo = AppDataSource.getRepository(User);
  const user = userRepo.create({ name, email, password: hashedPassword });

  await userRepo.save(user);
  res.json({ message: "User registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
     res.status(401).json({ message: "Invalid credentials" });
     return
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true }).json({ message: "Logged in" });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
});



export default router;
