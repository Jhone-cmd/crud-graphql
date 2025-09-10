import { hash } from "bcryptjs"
import { memoryDB } from "../../app"
import type { PropsUser } from "../../interfaces/interface-user"
import { Users } from "../../models/user-model"
import { deleteUser } from "../../services/delete-user"
import { updateUser } from "../../services/update-user"

export const resolverMutation = {
  Mutation: {
    createUserMutation: async (
      _: unknown,
      { input }: { input: PropsUser } // Acesso correto ao 'input'
    ) => {
      const newUser = new Users({
        name: input.name,
        email: input.email,
        password: await hash(input.password, 8),
        notes: input.notes,
      })

      newUser.id = newUser._id

      await newUser.save()

      return newUser
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
