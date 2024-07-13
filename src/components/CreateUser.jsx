import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../graphql/mutation";

function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [createUser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: { name: name, username: username, email: email, phone: phone },
    }
  );

  console.log({ loading, data, error, called });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name ..."
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username ..."
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email ..."
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="phone ..."
      />
      <button onClick={() => createUser()}>Create</button>
    </div>
  );
}

export default CreateUser;
