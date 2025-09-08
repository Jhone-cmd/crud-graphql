import type { PropsUser } from "../interfaces/interface-user"

export function createUser(
  id: string,
  { name, email, password, notes }: PropsUser
) {
  return {
    id,
    name,
    email,
    password,
    notes,
  }
}
