import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User.js";
import { env } from "./env.js";

export const AppDataSource = new DataSource({
	type: env.DB_TYPE as "postgres",
	host: env.DB_HOST,
	port: Number(env.PORT),
	username: env.DB_USERNAME,
	password: env.DB_PASSWORD,
	database: env.DB_NAME,
	synchronize: env.NODE_ENV === "test" || env.NODE_ENV === "development", // turn off in production
	logging: false,
	entities: [User],
	migrations: [],
	subscribers: [],
});
