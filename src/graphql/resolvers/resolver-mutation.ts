import { memoryDB } from "../../app"
import type { PropsUser } from "../../interfaces/interface-user"
import { createUser } from "../../services/create-user"
import { deleteUser } from "../../services/delete-user"
import { updateUser } from "../../services/update-user"

export const resolverMutation = {
  Mutation: {
    createUserMutation: (
      _: unknown,
      { input }: { input: PropsUser } // Acesso correto ao 'input'
    ) => {
      const id = crypto.randomUUID()
      const newUser = {
        id,
        name: input.name,
        email: input.email,
        password: input.password,
        notes: input.notes,
      }
      memoryDB[id] = newUser
      return createUser(id, newUser)
    },

    updateUserMutation: (
      _: unknown,
      { id, input }: { id: string; input: PropsUser } // Acesso correto ao 'input'
    ) => {
      const user = memoryDB[id]

      if (!user) {
        throw new Error("User not found.")
      }
      memoryDB[id] = {
        ...user,
        ...input,
      }
      return updateUser(id, {
        ...user,
        ...input,
      })
    },

    deleteUserMutation: (
      _: unknown,
      { id }: { id: string } // Acesso correto ao 'input'
    ) => {
      if (!memoryDB[id]) {
        throw new Error("User not found.")
      }

      const userId = id

      delete memoryDB[id]

      return deleteUser(userId)
    },
  },
}
