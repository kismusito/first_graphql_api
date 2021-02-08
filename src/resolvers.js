import User from "./models/User";

export const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (_, { _id }) => {
            return await User.findById(_id)
        },
    },
    Mutation: {
        createUser: async (_, { input }) => {
            const newUser = new User({
                name: input.name,
            });

            return await newUser.save();
        },
        updateUser: async (_, { _id, input }) => {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        },
        deleteUser: async (_, { _id }) => {
            return await User.findByIdAndDelete(_id);
        },
    },
};
