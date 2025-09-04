import z from "zod"
import "dotenv/config"

const schema = z.object({
  PORT: z.coerce.number().default(4000),
  URI: z.url(),
})

export const env = schema.parse(process.env)
