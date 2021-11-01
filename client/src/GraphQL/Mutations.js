import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation
  createUser(
  $userFirstName: String! 
  $userLastName: String! 
  $userNumber: Int!
  ) {
  createUser(
    userFirstName: $userFirstName
    userLastName: $userLastName
    userNumber: $userNumber
    ) {
      userFirstName
      userLastName
      userNumber
    }
    
  }
`