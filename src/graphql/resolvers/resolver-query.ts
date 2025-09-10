import { memoryDB } from "../../app"
import { Users } from "../../models/user-model"

export const resolverQuery = {
  Query: {
    users: () => {
      return Object.values(memoryDB)
    },

    getUser: async (_: unknown, { id }: { id: string }) => {
      const user = await Users.findById(id)
      return user
    },
  },
}
