const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    userFirstName: String!
    userLastName: String!
    userNumber: ID!

   
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
      userNumber: ID!
     ): User!,
     updateUser(userNumber: ID!, userLastName: String, userFirstName: String): User!
     deleteUser(userNumber: ID!): User!
    # deleteQuote(id: ID!): DeleteResponse



   }
   
`;

module.exports = {typeDefs}