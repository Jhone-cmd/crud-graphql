export const typeDefs = `
    type Users {
        id: ID
        name: String
        email: String
        password: String
        notes: [Note]
        status: Status
    }

    type Note {
        title: String
        description: String
    }
    
    enum Status {
        active
        inactive
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
        status: Status
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
