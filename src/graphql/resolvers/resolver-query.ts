import { memoryDB } from "../../app"
import { createUser } from "../../services/create-user"

export const resolverQuery = {
  Query: {
    user: () => ({
      id: 1,
      name: "John Doe",
      email: "johndoe@email.com",
      password: "123456789",
      notes: [{ title: "first note", description: "description note" }],
    }),

    getUser: (_: unknown, { id }: { id: string }) => {
      return createUser(id, memoryDB[id])
    },
  },
}
