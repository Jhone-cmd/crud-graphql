enum Status {
  active = "active",
  inactive = "inactive",
}

export interface PropsUser {
  name: string
  email: string
  password: string
  notes: [title: string, description: string]
  status: Status
}
