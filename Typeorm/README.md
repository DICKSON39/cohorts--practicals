**Backend Development Summary**

### 1. **Setting Up the Backend**
- Install Node.js and TypeScript
- Initialize project: `npm init -y`
- Install dependencies:
  ```bash
  npm install express cors dotenv pg typeorm reflect-metadata class-validator jsonwebtoken bcryptjs
  npm install --save-dev typescript ts-node @types/express @types/cors @types/node
  ```
- Configure `tsconfig.json` for TypeScript

### 2. **Express.js Server Setup**
- Create `server.ts` and initialize Express:
  ```ts
  import express from 'express';
  import cors from 'cors';
  import dotenv from 'dotenv';
  dotenv.config();
  
  const app = express();
  app.use(cors());
  app.use(express.json());
  
  app.listen(process.env.PORT || 5000, () => {
      console.log('Server running on port 5000');
  });
  ```

### 3. **Database & TypeORM Setup**
- Configure PostgreSQL database
- Setup `data-source.ts`:
  ```ts
  import "reflect-metadata";
  import { DataSource } from "typeorm";
  
  export const AppDataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "user",
      password: "password",
      database: "dbname",
      synchronize: false,
      entities: ["src/entities/*.ts"],
      migrations: ["src/migrations/*.ts"],
  });
  ```
- Initialize TypeORM: `npx typeorm migration:run -d src/data-source.ts`

### 4. **Creating Entities & Migrations**
- Define User entity (`src/entities/User.ts`):
  ```ts
  import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
  
  @Entity()
  export class User {
      @PrimaryGeneratedColumn()
      id: number;
      
      @Column()
      name: string;
      
      @Column({ unique: true })
      email: string;
      
      @Column()
      password: string;
  }
  ```
- Generate and run migrations:
  ```bash
  npx typeorm migration:generate -d src/data-source.ts -n CreateUsers
  npx typeorm migration:run -d src/data-source.ts
  ```

### 5. **Authentication (JWT & Bcrypt)**
- Install JWT & bcrypt: `npm install jsonwebtoken bcryptjs`
- User authentication logic in controller:
  ```ts
  import bcrypt from 'bcryptjs';
  import jwt from 'jsonwebtoken';
  
  const login = async (req, res) => {
      const user = await userRepository.findOne({ where: { email: req.body.email } });
      if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
          return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      res.json({ token });
  };
  ```

### 6. **Role-Based Access Control (RBAC)**
- Define Role entity (`src/entities/Role.ts`)
- Assign users to roles
- Middleware to check role access

### 7. **Testing APIs with Postman**
- Use **POST** requests to `/register` and `/login`
- Use **GET** requests with `Authorization: Bearer <token>`

### 8. **Handling Migrations**
- Create new migration: `npx typeorm migration:generate -d src/data-source.ts -n MigrationName`
- Run migrations: `npx typeorm migration:run -d src/data-source.ts`
- Revert migrations if needed: `npx typeorm migration:revert -d src/data-source.ts`

### 9. **Deployment Considerations**
- Use environment variables (`.env` file)
- Use PM2 for process management in production
- Deploy using Docker or cloud services

### 10. **API Documentation & Best Practices**
- Use Swagger for API docs
- Ensure error handling & validation
- Implement logging and monitoring

