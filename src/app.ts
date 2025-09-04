import cors from "@fastify/cors"
import fastify from "fastify"

export const app = fastify()
app.register(cors)

console.log("hello world")
