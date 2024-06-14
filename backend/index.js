import express from "express";
import authRoutes from "./route/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { connection } from "./Database/db.js";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(authRoutes);
app.listen(process.env.PORT, async () => {
  await connection();
  console.log(`Server Running in http://localhost:${process.env.PORT}`);
});
export default app;
