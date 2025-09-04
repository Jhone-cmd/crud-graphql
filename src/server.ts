import { app } from "./app"
import { env } from "./env/schema"

app.listen({ port: env.PORT }, () => {
  console.log("Server is running 🚀")
})
