import express from 'express';
import { login } from '../controller/login.controller.js';

const router = express.Router();

router.post('/login', login);

export default router;
