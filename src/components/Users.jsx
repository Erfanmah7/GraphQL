import { gql, useQuery } from "@apollo/client";
import React from "react";

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

function Users() {
  const { loading, data, error } = useQuery(QUERY_USERS);
  console.log({ loading, data, error });

  if (loading) return <h1>Loading...</h1>;
  if (error) return error.message;
  return (
    <div>
      {data.users.data.map((user) => (
        <div
          key={user.id}
          style={{ backgroundColor: "blue", padding: "15px", margin: "15px" }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
