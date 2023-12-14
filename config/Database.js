import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const db = new Sequelize(process.env.RAILWAY_DATABASE, process.env.RAILWAY_USERNAME, process.env.RAILWAY_PASSWORD, {
    host: process.env.RAILWAY_HOST,
    dialect: "mysql"
});

export default db;
