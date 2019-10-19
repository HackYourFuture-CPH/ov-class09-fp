import React, { Component } from "react";
import CreateUserButton from "./CreateUserButton";

export default class AdminContainer extends Component {
  state = {
    name: "",
    email: "",
    organizationName: ""
  };

  organizationOptions = [
    "D'Amore, Miller and Kemmer",
    "Ledner and Sons",
    "Cummerata, McClure and Koch"
  ];

  handleCreate = event => {
    event.preventDefault();
    //this.users.push(this.state);
    console.log(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div>This is the Admin Page ;)</div>
        <CreateUserButton
          state={this.state}
          handleChange={this.handleChange}
          handleCreate={this.handleCreate}
          organizationOptions={this.organizationOptions}
        />
      </div>
    );
  }
}
