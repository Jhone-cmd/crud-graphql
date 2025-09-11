import { hash } from "bcryptjs"
import type { PropsUser } from "../../interfaces/interface-user"
import { Users } from "../../models/user-model"

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

    updateUserMutation: async (
      _: unknown,
      { id, input }: { id: string; input: PropsUser } // Acesso correto ao 'input'
    ) => {
      const user = await Users.findById(id)

      if (!user) {
        throw new Error("User not found.")
      }

      const updateFields = { ...input }

      if (input.password) {
        const hashedPassword = await hash(input.password, 8)
        updateFields.password = hashedPassword
      }

      const updatedUser = await Users.findByIdAndUpdate(
        { _id: id },
        { $set: updateFields },
        { new: true, runValidators: true }
      )

      return updatedUser
    },

    deleteUserMutation: async (
      _: unknown,
      { id }: { id: string } // Acesso correto ao 'input'
    ) => {
      const user = await Users.findById(id)

      if (!user) {
        throw new Error("User not found.")
      }

      await Users.deleteOne({ _id: id })

      return user
    },

    deleteAllUsersMutation: async (_: unknown) => {
      const users = await Users.find()

      await Users.deleteMany()

      return users
    },
  },
}
