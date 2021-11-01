import {gql} from "@apollo/client";

export const LOAD_USERS = gql `
  query {
    getAllUsers {
      userFirstName
      userLastName
      userNumber
    }
  }
`