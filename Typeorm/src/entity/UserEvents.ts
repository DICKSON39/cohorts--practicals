import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User";
@Entity()
export class UserEvents {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column()
    date: string;

    
  
    @ManyToOne(() => User, (user) => user.events, { onDelete: "CASCADE" })
    user: User; // An event is linked to a specific user

    
}