import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { AuthRequest } from '../types/customRequest';

dotenv.config();



// Middleware to check JWT token
export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
     res.status(401).json({ message: 'Access denied. No token provided.' });
     return
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { user_id: number; role_id: number; name: string };
    req.user = decoded; // ✅ Attach user to request
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};