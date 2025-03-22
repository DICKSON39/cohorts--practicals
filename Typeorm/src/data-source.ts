import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { UserEvents } from './entity/UserEvents'
import { Role } from "./entity/Roles"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "EventsZetu",
    synchronize: true,
    logging: false,
    entities: [User,UserEvents,Role],
    migrations: [],
    subscribers: [],
})
