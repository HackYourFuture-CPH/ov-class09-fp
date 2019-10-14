import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    isLoggedin: false
  };

  clickHandlerCancel = event => {
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(
        data => {
          localStorage.setItem("token", data.data.token);
          this.setState({
            isLoggedin: true
          });
        },
        error => {
          console.error(error);
        }
      );
  };

  render() {
    const { email, password, isLoggedin } = this.state;
    const { from } = (this.props.location && this.props.location.state) || {
      from: { pathname: "/home" }
    };

    if (isLoggedin) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <p>You must log in to view this page at {from.pathname}</p>
        <form onSubmit={this.handleSubmit}>
          <h1>LoginForm</h1>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={email}
              placeholder="Enter your Email"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Login</button>
          <button onClick={this.clickHandlerCancel}>Cancel</button>
          <h1>{this.state.result}</h1>
        </form>
      </div>
    );
  }
}

export default LoginForm;
