import { Router } from "express";
import { EventController } from "../controllers/EventControllers";


const router = Router();
const eventsControler = new EventController();

router.post("/events",eventsControler.createEvent)
router.get("/events", eventsControler.getEvents)

export default router;