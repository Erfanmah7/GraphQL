import React, { useState } from "react";
import { DELETE_USER } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function DeleteUser() {
  const [id, setId] = useState("");
  const [deleteUser, { loading, data, error, called }] = useMutation(
    DELETE_USER,
    { variables: { id: id } }
  );
  console.log({ loading, data, error, called });
  return (
    <div>
      <input
        type="text"
        placeholder="id ..."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => deleteUser()}>Delete</button>
    </div>
  );
}

export default DeleteUser;
