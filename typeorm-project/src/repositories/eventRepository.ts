import { AppDataSource } from "../data-source";
import { Event } from "../entity/Events";

export const eventRepository = AppDataSource.getRepository(Event);
