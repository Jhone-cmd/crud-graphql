// import { memoryDB } from "../../app"
import { Users } from "../../models/user-model"

export const resolverQuery = {
  Query: {
    getAllUsers: async () => {
      const users = await Users.find()
      return users
    },

    getUser: async (_: unknown, { id }: { id: string }) => {
      const user = await Users.findById(id)
      return user
    },
  },
}
