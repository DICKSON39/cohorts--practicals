import { Request, Response, NextFunction } from "express";
import pool from "../config/db";

export const processImageUrl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user_id, image_url, caption } = req.body;

    if (!user_id || !image_url) {
       res.status(400).json({ message: "user_id and image_url are required" });
       return
    }

    // Insert into the database
    const query = `
      INSERT INTO posts (user_id, image_url, caption)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [user_id, image_url, caption];
    const result = await pool.query(query, values);

    res.status(200).json({ message: "Image URL processed successfully", post: result.rows[0] });
  } catch (error) {
    next(error);
  }
};

export const getAllPostsWithUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = `
      SELECT 
        posts.id AS post_id,
        posts.image_url,
        posts.caption,
        posts.created_at AS post_created_at,
        users.id AS user_id,
        users.username,
        users.email
      FROM 
        posts
      JOIN 
        users ON posts.user_id = users.id
      ORDER BY 
        posts.created_at DESC
    `;

    const result = await pool.query(query);

    if (result.rows.length === 0) {
       res.status(404).json({ message: "No posts found" });
       return
    }

    res.status(200).json({ posts: result.rows });
  } catch (error) {
    next(error);
  }
};