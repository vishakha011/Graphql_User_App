// const { ApolloServer } = require("apollo-server")

// const express = require('express');
// const app = express();

// // const server = new ApolloServer(({ typeDefs, resolvers}))

// // server.applyMiddleware({ app })

// app.listen({ port: 3000 }, () => {
//   console.log("Server running on port 3000")
// });

// const { ApolloServer } = require("apollo-server-express");

// const express = require("express");
// const app = express();

// //graphql server

// //types query/mutation/subscription
// const typeDefs = `
//     type Query {
//         totalPosts: Int!
//     }
// `;

// //resolvers
// const resolvers = {
//   Query: {
//     totalPosts: () => 42,
//   },
// };

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// //express server

// apolloServer.applyMiddleware({ app });

// app.get("/rest", (req, res) => {
//   res.json({
//     data: "API is working...",
//   });
// });

// app.listen(4000, () => {
//   console.log(`🚀 Server is running at http://localhost:${4000}`);
// });


const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const fs = require ('fs')

const port = 4000;
const path = '/graphql'

const app = express()
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

// const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}))

// const resolvers = require('./resolver')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app, path })

app.listen(port, () => console.info(`Server started on port ${port}`));