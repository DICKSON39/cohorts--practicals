
import { Request, Response, NextFunction } from "express";
import { RoleRequest } from "../../utils/types/userRoles";
import asyncHandler from "../asyncHandler";


//ensure user has required roles 
export const roleGuard = (allowedRoles: string[]) =>
    asyncHandler<void, RoleRequest>(async (req:RoleRequest, res:Response, next:NextFunction) => {
        console.log("🔍 Checking Role Guard...");
        console.log("👤 User Role:", req.user?.role_name);
        console.log("✅ Allowed Roles:", allowedRoles);
        if (!req.user || !allowedRoles.includes(req.user.role_name)) {
            res.status(403).json({ message: "Access denied: Insufficient permissions" });
            return;
        }
        next();
    });



// Specific guards
export const Admin= roleGuard(["Admin"]);         // Full app control
export const Librarian = roleGuard(["Librarian"]); // Event creation & management
export const Borrower = roleGuard(["Borrower"]);   // Attendee-only actions

