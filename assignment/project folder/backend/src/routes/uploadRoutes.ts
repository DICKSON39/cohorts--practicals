import express from "express";
import { processImageUrl } from "../controllers/uploadController";
import { getAllPostsWithUsers } from "../controllers/uploadController";


const router = express.Router();

router.post("/upload", processImageUrl);
router.get("/posts", getAllPostsWithUsers);



export default router;