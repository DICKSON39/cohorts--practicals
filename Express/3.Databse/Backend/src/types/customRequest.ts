import { Request } from 'express';

export interface AuthRequest extends Request {
  user?: {
    user_id: number;
    role_id: number;
    name: string;
  };
}
