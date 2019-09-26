import React, { Component } from "react";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      result: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:3000/api/auth/login/ ", {
      method: "POST",
      headers: {
        Accept: "application/json text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("token", data.token); //storing token into local storage
        //console.log(data);
      });
  };
  catch(err) {
    return err.message;
  }

  render() {
    const { email, password, result } = this.state;
    return (
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
        <br />
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
    );
  }
}
export default LoginForm;
