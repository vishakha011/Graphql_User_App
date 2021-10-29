const { ApolloServer } = require("apollo-server")

const express = require('express');
const app = express();

// const server = new ApolloServer(({ typeDefs, resolvers}))

// server.applyMiddleware({ app })

app.listen({ port: 3000 }, () => {
  console.log("Server running on port 3000")
});

