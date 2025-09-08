import { memoryDB } from "../../app"
import type { PropsUser } from "../../interfaces/interface-user"
import { createUser } from "../../services/create-user"

export const resolverMutation = {
  Mutation: {
    createUserMutation: (
      _: any,
      { name, email, password, notes }: PropsUser
    ) => {
      const id = crypto.randomUUID()
      memoryDB[id] = {
        name,
        email,
        password,
        notes,
      }
      return createUser(id, {
        name,
        email,
        password,
        notes,
      })
    },
  },
}
