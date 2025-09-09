import { hash } from "bcryptjs"
import { memoryDB } from "../../app"
import type { PropsUser } from "../../interfaces/interface-user"
import { createUser } from "../../services/create-user"

export const resolverMutation = {
  Mutation: {
    createUserMutation: async (
      _: unknown,
      { input }: { input: PropsUser } // Acesso correto ao 'input'
    ) => {
      const id = crypto.randomUUID()
      memoryDB[id] = {
        name: input.name,
        email: input.email,
        password: input.password,
        notes: input.notes,
      }
      return createUser(id, {
        name: input.name,
        email: input.email,
        password: await hash(input.password, 8),
        notes: input.notes,
      })
    },
  },
}
