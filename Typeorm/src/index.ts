import "reflect-metadata";
import express from 'express'
import { AppDataSource } from "./data-source";
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes'
import eventsRoutes from './routes/events.routes'



dotenv.config();
const app = express();

const PORT =  5000

app.use(cors())
app.use(express.json())


  
  

app.use("/api",userRoutes)
app.use("/api",eventsRoutes)


AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database connection error:", error));