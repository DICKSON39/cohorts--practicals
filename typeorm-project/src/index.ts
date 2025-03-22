import "reflect-metadata";
import express from 'express'
import { AppDataSource } from "./data-source";
import cors from 'cors'
import * as dotenv from 'dotenv'
import authRoutes from './routes/auth'


dotenv.config();
const app = express();

const PORT =  5000

app.use(cors())
app.use(express.json())


 app.use("/auth", authRoutes)
  




AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database connection error:", error));