import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";
import * as path from "path";
import { ApolloServer, gql } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { RecipeResolver } from "./resolvers/recipe.resolvers";

(async function () {
    // creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
        controllers: [UserController] // we specify controllers we want to use
    });


    const schema = await buildSchema({
        resolvers: [RecipeResolver],
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    // Create GraphQL server
    const server = new ApolloServer({
        schema,
        // enable GraphQL Playground
        playground: true,
    });
    server.applyMiddleware({ app });

    // run express application on port 3000
    app.listen(3000, () => {
        console.log(`Server listen on 3000 port ${server.graphqlPath}`)
    });
})();

