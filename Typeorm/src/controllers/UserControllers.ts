import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Role } from "../entity/Roles";

const userRepository = AppDataSource.getRepository(User);
const roleRepository = AppDataSource.getRepository(Role);

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email, password, roleId } = req.body;
      console.log("Received roleId:", roleId); // Debugging
     const parsedRoleId = parseInt(roleId, 10);
     if (isNaN(parsedRoleId)) {
        res.status(400).json({ message: "Invalid roleId" });
        return
     }
 
     const role = await roleRepository.findOneBy({ id: parsedRoleId });
     if (!role) {
        res.status(404).json({ message: "Role not found" });
        return
     }

      const newUser = userRepository.create({ name, email, password, role });
      await userRepository.save(newUser);

      res.status(201).json({ message: "User created", user: newUser });
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await userRepository.find({ relations: ["role", "events"] });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
