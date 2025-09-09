import { memoryDB } from "../../app"
import { createUser } from "../../services/create-user"

export const resolverQuery = {
  Query: {
    users: () => {
      return Object.values(memoryDB)
    },

    getUser: (_: unknown, { id }: { id: string }) => {
      return createUser(id, memoryDB[id])
    },
  },
}
