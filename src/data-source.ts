import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DATABASE_USER??'postgres',
    password: process.env.DATABASE_PASSWORD??'postgres',
    database: 'sales',
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
});