import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../graphql/queries";

function User() {
  const [id, setId] = useState("");

  const { loading, data, error } = useQuery(QUERY_USER, {
    variables: { id: id },
  });

  console.log(data);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {loading && (
        <>
          <h1>Loading...</h1>
        </>
      )}
      {data && (
        <>
          <h3>{data.user.name}</h3>
          <p>{data.user.email}</p>
          <p>{data.user.phone}</p>
        </>
      )}
      {error && (
        <>
          <p>{error.message}</p>
        </>
      )}
    </div>
  );
}

export default User;
