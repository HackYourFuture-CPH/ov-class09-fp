import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Button from "./Button";

export default class LogoutButton extends React.Component {
  state = {
    isLoggedin: true
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      isLoggedin: false
    });
  };

  render() {
    const { isLoggedin } = this.state;

    if (!isLoggedin) {
      return <Redirect to={"/login"} />;
    }

    return <Button label={"Logout"} handleClick={this.logout} />;
  }
}
