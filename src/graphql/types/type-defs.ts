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
        user: Users
    }
`
