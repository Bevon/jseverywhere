import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectToDB } from "./dbConnect.js";
dotenv.config();
const DB_HOST = process.env.DB_HOST;
const PORT = process.env.PORT || 4000;

//import your models
import { models } from "./models/index.js";

//import typeDefs & Resolvers
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers/index.js";

//Connect to MongoDB database
connectToDB(DB_HOST);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  context: () => ({ models }),
  listen: { port: PORT },
});

console.log(`🚀  Server ready at:${url}`);
