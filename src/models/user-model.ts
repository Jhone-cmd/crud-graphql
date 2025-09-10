import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  notes: Array,
})

export const Users = mongoose.model("User", userSchema)
