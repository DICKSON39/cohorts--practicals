import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretKey = 'your_secret_key';
declare module "express-serve-static-core" {
    interface Request {
        user?: {
            
            user_id: string;
            roleName: string;
        };
    }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
         res.status(403).json({ message: "Access denied. No token provided." });
         return
    }

    try {
        const decoded = jwt.verify(token, secretKey) as { user_id: string; roleName: string };
        req.user = decoded; // Attach user details to the request object
        next();
    } catch (err) {
         res.status(401).json({ message: "Invalid token." });
         return
    }
};

export const authorizeRole = (requiredRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || req.user.roleName !== requiredRole) {
             res.status(403).json({ message: "Access denied. Insufficient permissions." });
             return
        }
        next();
    };
};