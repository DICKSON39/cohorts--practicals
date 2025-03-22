import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { UserEvents } from "../entity/UserEvents";
import { User } from "../entity/User";

const eventRepository = AppDataSource.getRepository(UserEvents);
const userRepository = AppDataSource.getRepository(User);

export class EventController {
  async createEvent(req: Request, res:Response) {
    try {
      const {title,description,date,userId} = req.body
      console.log(userId)
    
      // Convert userId to number
    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
       res.status(400).json({ message: "Invalid userId" });
       return
    }

    // Find the user
    const user = await userRepository.findOneBy({ id: parsedUserId });
    if (!user) {
       res.status(404).json({ message: "User not found" });
       return
    }
      
      const newEvent = eventRepository.create({
        title,
        description,
        date,
        user, // ✅ User exists in the UserEvent entity
      });
  
      await eventRepository.save(newEvent);
     
      res.status(201).json({message: "Event created ", event: newEvent})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getEvents(req: Request, res: Response) {
    try {
      const events = await eventRepository.find({ relations: ["user"] });
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}