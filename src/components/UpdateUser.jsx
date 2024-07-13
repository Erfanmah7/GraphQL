import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_USER } from "../graphql/mutation";

function UpdateUser() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [UpdateUser, { loading, data, error, called }] = useMutation(
    UPDATE_USER,
    {
      variables: { id: id, name: name, email: email },
    }
  );

  console.log({ loading, data, error, called });

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="id ..."
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name ..."
      />

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email ..."
      />

      <button onClick={() => UpdateUser()}>Update</button>
    </div>
  );
}

export default UpdateUser;
