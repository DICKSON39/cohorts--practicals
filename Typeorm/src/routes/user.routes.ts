import { Router } from "express";
import { UserController } from "../controllers/UserControllers";

const router = Router();
const userController = new UserController();

router.post("/users", userController.createUser);  // Create user
router.get("/users", userController.getUsers);     // Get all users

export default router;
