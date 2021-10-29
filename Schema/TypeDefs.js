const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    userFirstName: String!
    userLastName: String!
    userNumber: Int!
  }

  #Quesries

  type Query {
    getAllUsers: [User!]!
  }

  #Mutations
   type Mutation {
     createUser(
      userFirstName: String!,
      userLastName: String!,
      userNumber: Int!
     ): User!
   }
`;

module.exports = {typeDefs}