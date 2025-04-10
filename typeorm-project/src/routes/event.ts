import express from "express";
import { eventRepository } from "../repositories/eventRepository";

const router = express.Router();

// Add an Event
router.post("/", async (req, res) => {
  const { title, description, date } = req.body;
  
  if (!title || !description || !date) {
     res.status(400).json({ message: "All fields are required" });
     return
  }

  try {
    const newEvent = eventRepository.create({ title, description, date });
    await eventRepository.save(newEvent);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
});

// Get All Events
router.get("/", async (req, res) => {
  const events = await eventRepository.find();
  res.json(events);
});

export default router;

//Delete Event
router.delete("/", async(req,res) => {
  const {title} = req.body;

  if(!title) {
    res.status(400).json({message: "All fields required"})
    return
  }

  try {
    const newDeletedEvent = await eventRepository.delete({title});
    res.status(201).json({message: "Event deleted successfully", newDeletedEvent});
    return
  } catch (error) {
    res.status(500).json({message: "Internal server error"})
  }
})

