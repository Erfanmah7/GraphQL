import { gql } from "@apollo/client";

const QUERY_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const QUERY_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

export { QUERY_USER, QUERY_USERS };
