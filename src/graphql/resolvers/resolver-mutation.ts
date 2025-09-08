import { memoryDB } from "../../app"
import type { PropsUser } from "../../interfaces/interface-user"
import { createUser } from "../../services/create-user"

export const resolverMutation = {
  Mutation: {
    createUserMutation: (_: any, input: PropsUser) => {
      const id = crypto.randomUUID()
      memoryDB[id] = input
      return createUser(id, input)
    },
  },
}
