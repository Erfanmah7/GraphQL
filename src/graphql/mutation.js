import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: { name: $name, username: $username, email: $email, phone: $phone }
    ) {
      id
      name
      username
      email
      phone
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String!, $email: String!) {
    updateUser(id: $id, input: { name: $name, email: $email }) {
      id
      name
      email
      phone
    }
  }
`;

export { CREATE_USER, UPDATE_USER };
