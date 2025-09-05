import cors from "@fastify/cors"
import fastify from "fastify"
import { connectDB } from "./config/connect-database"

export const app = fastify()
app.register(cors)

connectDB()
console.log("hello world")
