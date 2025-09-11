import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  notes: Array,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
})

export const Users = mongoose.model("User", userSchema)
