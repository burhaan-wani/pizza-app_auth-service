import { DataSource } from "typeorm";
import { env, __dirname } from "./env.js";
import { User } from "../entities/User.js";

export const myDataSource = new DataSource({
    type: env.DB_TYPE as "postgres",
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: env.NODE_ENV === "test" || env.NODE_ENV === "development", // turn off in production
    logging: false,
    entities: [__dirname + "/../entities/*.{ts,js}"],
    migrations: [],
    subscribers: [],
});
