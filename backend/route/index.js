import express from "express";
import authRoutes from "./loginRoute.js";

const app = express();

app.use(authRoutes);

export default app;
