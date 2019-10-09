import React, { Component } from "react";

function BoxHeader({ title }) {
  return <label>{title}</label>;
}

function BoxRow({ children }) {
  return <div>{children}</div>;
}

export default function CreateUser({
  handleChange,

  createUser
}) {
  return (
    <BoxRow>
      <form onSubmit={e => createUser(e)}>
        <BoxHeader title="Name" />
        <input type="text" name="name" onChange={e => handleChange(e)} />
        <BoxHeader title="Email" />
        <input type="email" name="email" onChange={e => handleChange(e)} />
        <BoxHeader title="Organization" />

        <select name="organization" onChange={e => handleChange(e)}>
          <option value="organization1">Organization1</option>
          <option value="organization2">Organization2</option>
          <option value="organization3">Organization3</option>
          <option value="organization4">Organization4</option>
        </select>
        {/* <input
          type="text"
          name="organization"
          onChange={e => handleChange(e)}
        /> */}
        <input type="submit" value="Create User" />
      </form>
    </BoxRow>
  );
}
