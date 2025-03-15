import pool from '../db/db';
import bcrypt from 'bcryptjs';

export const createUser = async (name: string, email: string, password: string, role_id: number) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO users (name, email, password, role_id) VALUES ($1, $2, $3, $4) RETURNING *`;
  const { rows } = await pool.query(query, [name, email, hashedPassword, role_id]);
  return rows[0];
};

export const findUserByEmail = async (email: string) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};
