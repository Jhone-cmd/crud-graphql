import { ApolloServer } from "@apollo/server"
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify"
import cors from "@fastify/cors"
import fastify from "fastify"
import { connectDB } from "./config/connect-database"
import { resolverQuery } from "./graphql/resolvers/resolver-query"
import { typeDefs } from "./graphql/types/type-defs"

export const app = fastify()

async function init() {
  connectDB()

  const apollo = new ApolloServer({
    typeDefs,
    resolvers: [resolverQuery],
    plugins: [fastifyApolloDrainPlugin(app)],
  })

  await apollo.start()

  app.register(cors)
  await app.register(fastifyApollo(apollo))
}

init()
