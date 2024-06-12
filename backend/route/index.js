import express from 'express';
import authRoutes from '../route/login.route.js';

const app = express();

app.use(express.json());

app.use(authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
