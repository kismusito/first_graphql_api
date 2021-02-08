import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `

    type User {
        _id: ID!
        name: String!
        created_at: String
    }

    input UserInput {
        name: String!
    }

    type Query {
        users: [User]
        user(_id: ID): User
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(_id: ID , input: UserInput): User
        deleteUser(_id: ID): User
    }
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});
