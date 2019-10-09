import React, { Component } from "react";
import UserDetail from "./UserDetail";
import ManageUsersTable from "./ManageUsersTable";
import CreateUser from "./CreateUser";
import axios from "axios";

export default class AdminPage extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    organization: "",
    selectedUser: [],
    userName: "",
    showForm: false
  };

  deleteHandler = id => {
    const deleteUser = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: deleteUser,
      selectedUser: [],
      userName: ""
    });
  };
  clickUserHandler = id => {
    const { users } = this.state;
    const user = users.filter(user => user.id === id);
    const [selectedUser] = user;
    this.setState({
      selectedUser: selectedUser
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { selectedUser, userName } = this.state;

    if (userName !== "" && !undefined && selectedUser.length !== 0) {
      const users = [...this.state.users];
      const index = users.findIndex(user => user.id === selectedUser.id);
      users[index].name = userName;
      this.setState({
        users: users,
        userName: ""
      });
    }
  };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };
  createUser = e => {
    e.preventDefault();
    const user = {
      id: 10,
      name: this.state.name,
      email: this.state.email,
      organization: this.state.organization
    };
    this.setState({
      users: [...this.state.users, user]
    });
  };
  componentDidMount() {
    axios.get("//api/organizations/:organization_id/users/").then(response => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const {
      users,
      selectedUser,
      showForm,
      name,
      email,
      organization
    } = this.state;
    console.log("user from state", users);

    return (
      <div>
        {!showForm ? (
          <UserDetail
            selectedUser={selectedUser}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <CreateUser
            handleChange={this.handleChange}
            createUser={this.createUser}
            name={name}
            organization={organization}
            email={email}
          />
        )}
        <button onClick={this.toggleForm}>CREATE USER</button>
        <ManageUsersTable
          users={users}
          deleteHandler={this.deleteHandler}
          clickUserHandler={this.clickUserHandler}
        />
      </div>
    );
  }
}
