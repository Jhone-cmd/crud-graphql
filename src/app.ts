import { ApolloServer } from "@apollo/server"
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify"
import cors from "@fastify/cors"
import fastify from "fastify"
import { connectDB } from "./config/connect-database"
import { resolverMutation } from "./graphql/resolvers/resolver-mutation"
import { resolverQuery } from "./graphql/resolvers/resolver-query"
import { typeDefs } from "./graphql/types/type-defs"
import type { PropsUser } from "./interfaces/interface-user"

export const app = fastify()

type UserDB = Record<string, PropsUser>

export const memoryDB: UserDB = {}

async function init() {
  connectDB()

  const apollo = new ApolloServer({
    typeDefs,
    resolvers: [resolverQuery, resolverMutation],
    plugins: [fastifyApolloDrainPlugin(app)],
  })

  await apollo.start()

  app.register(cors)
  await app.register(fastifyApollo(apollo))
}

init()
