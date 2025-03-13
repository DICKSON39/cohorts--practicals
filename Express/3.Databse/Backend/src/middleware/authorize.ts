import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: { user_id: number; role_id: number };
}

// Middleware to check user role
export const authorize = (roles: number[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
     res.status(401).json({ message: 'Unauthorized' });
     return
    }

    if (!roles.includes(req.user.role_id)) {
       res.status(403).json({ message: 'Forbidden: You do not have permission' });
       return
    }

    next();
  };
};
