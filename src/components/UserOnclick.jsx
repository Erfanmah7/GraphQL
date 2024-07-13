import React, { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_USER } from "../graphql/queries";

function UserOnclick() {
  const [id, setId] = useState("");

  const [getQuery, { loading, data, error, called }] = useLazyQuery(
    QUERY_USER,
    {
      variables: { id: id },
    }
  );

  console.log({ loading, data, error, called });

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => getQuery()}>Click</button>
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

export default UserOnclick;
