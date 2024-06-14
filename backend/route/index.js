import express from 'express';
import authRoutes from '../route/login.route.js';

const app = express();

app.use(authRoutes);

export default app