import express from "express"
import dotenv from "dotenv"
import { connection } from "../backend/Database/db.js";
import routes from '../backend/route/index.js'
import cors from "cors"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

const port = process.env.PORT || 3000
const hostname = 'localhost'

app.listen(port, hostname, () => {
    connection()
    console.log("server running at http://localhost:"+ process.env.PORT)
});
