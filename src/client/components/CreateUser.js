import React, { Component } from "react";
import Button from "./Button";

// Rewrite to functional component
export default function CreateUser(props) {
  // Props:
  // username - string
  // email - string
  // organizationName - string
  // organizationOptions (all available organizations) - array
  // handleCreateUser - function

  // state = {
  //   name: "",
  //   email: "",
  //   organization: ""
  // };

  // users = [];

  //  handleChange = event => {
  //    this.setState({
  //      [event.target.name]: event.target.value
  //    });
  //  };

  // handleCreate = event => {
  //   event.preventDefault();
  //   this.users.push(this.state);
  //   console.log(this.users);
  // };

  const { name, email, organizationName } = props.state;
  const options = props.organizationOptions;

  return (
    <div tabIndex={-1} className={props.classes.paper}>
      <h2>Create user</h2>
      <br />
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Enter full name"
          onChange={props.handleChange}
          tabIndex="-1"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <label>
        Organization:
        <select
          name="organizationName"
          onChange={props.handleChange}
          value={organizationName}
        >
          {options.length > 0 &&
            options.map(option => (
              <option key={options.indexOf(option)} organization={option}>
                {option}
              </option>
            ))}
        </select>
      </label>
      <br />
      <Button label={"CANCEL"} handleClick={props.handleClose} />
      <Button label={"CREATE USER"} handleClick={props.handleCreate} />
    </div>
  );
}
