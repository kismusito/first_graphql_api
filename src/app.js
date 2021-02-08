import express from "express";
const app = express();
import { graphqlHTTP } from "express-graphql";
import queries from "./queries";

app.use(
    "/graphql/",
    graphqlHTTP({
        graphiql: true,
        schema: queries,
    })
);

module.exports = app;
