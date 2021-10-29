const { ApolloServer, gql } = require("apollo-server-express")
const {typeDefs} = require("./Schema/TypeDefs");
const {resolvers} = require("./Schema/Resolvers");
const express = require('express');
const app = express();
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const server = new ApolloServer(({ typeDefs, resolvers, playground: {
  endpoint: 'http://someurl/abc/graphql',
  settings: {
    'editor.theme': 'light'
  }
}}))

server.applyMiddleware({ app })

app.listen({port: 3000}, () => {
  console.log("Server running on port 3000")
});