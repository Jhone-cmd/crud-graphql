import { ApolloServer } from "@apollo/server"
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify"
import cors from "@fastify/cors"
import fastify from "fastify"
import { connectDB } from "./config/connect-database"
import { typeDefs } from "./graphql/types/type-defs"

export const app = fastify()

async function init() {
  connectDB()

  const resolvers = {
    Query: {
      user: () => ({
        id: 1,
        name: "John Doe",
        email: "johndoe@email.com",
        password: "jsaiodasd45a6s46dasdas",
        notes: [{ title: "first note", description: "description note" }],
      }),
    },
  }

  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [fastifyApolloDrainPlugin(app)],
  })

  await apollo.start()

  app.register(cors)
  await app.register(fastifyApollo(apollo))
}

init()
