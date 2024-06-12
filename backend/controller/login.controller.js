import { query } from "../Database/db.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register Endpoint
export const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        await query("INSERT INTO users(username, password) VALUES (?, ?)", [username, hashedPassword]);
        return res.status(200).json({ msg: "User registered successfully" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Server error occurred" });
    }
};

// Login Endpoint
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await query("SELECT * FROM users WHERE username = ?", [username]);
        if (result.length === 0) {
            return res.status(401).json({ msg: "Invalid username or password" });
        }

        const user = result[0];
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ msg: "Invalid username or password" });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, "your_jwt_secret_key", { expiresIn: "1h" });
        return res.status(200).json({ msg: "Login successful", token });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Server error occurred" });
    }
};
