export const typeDefs = `
    type Users {
        id: ID
        name: String
        email: String
        password: String
        notes: [Note]
    }

    type Note {
        title: String
        description: String
    }

    type Query {
        getUser(id: ID): Users
        getAllUsers: [Users]
    }

    input UserInput {
        id: ID
        name: String
        email: String
        password: String
        notes: [NoteInput]
    }

    input NoteInput {
        title: String
        description: String
    }

    type Mutation {
        createUserMutation(input: UserInput): Users
        updateUserMutation(id: ID, input: UserInput): Users
        deleteUserMutation(id: ID): Users
        deleteAllUsersMutation: [Users]
    }
`
