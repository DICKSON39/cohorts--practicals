import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { createUser, findUserByEmail } from '../models/userModel';

dotenv.config();

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role_id } = req.body;
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
       res.status(400).json({ message: 'Email already in use' });
       return
    }

    const newUser = await createUser(name, email, password, role_id);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ message: 'Invalid credentials' });
      return
    }

    const token = jwt.sign({ user_id: user.user_id, role_id: user.role_id }, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
