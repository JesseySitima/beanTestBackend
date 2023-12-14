import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/databaseConfig.js"; // Updated import path
import router from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Use Railway's provided port or default to 5000

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
