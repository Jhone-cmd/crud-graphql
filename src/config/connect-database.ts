import mongoose from "mongoose"
import { env } from "../env/schema"

export async function connectDB() {
  await mongoose.connect(env.URI)
  console.log("DB connect successful")
}
