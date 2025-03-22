import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Role } from "./Roles"
import { UserEvents } from './UserEvents'


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
  
    @ManyToOne(() => Role, (role) => role.users)
    role: Role;  // Many users belong to one role
  
    @OneToMany(() => UserEvents, (event) => event.user)
    events: UserEvents[]; // One user can have many events
   

}
