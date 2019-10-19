import React, { Component } from "react";
import LogoutButton from "./LogoutButton";
import { getTokenData } from "../utilities/getTokenData";
class SecondaryNavigationBar extends Component {
  state = {
    userName: "",
    userRole: ""
  };
  render() {
    let userData = getTokenData;
    console.log("This is", userData);

    if (
      this.props.userRole.toLowerCase() === "admin" ||
      this.props.userRole.toLowerCase() === "superuser"
    ) {
      return (
        <div>
          <h4>{this.props.userName}</h4>
          <p>
            <a href="">Administration</a>
          </p>
          <LogoutButton />
        </div>
      );
    } else {
      return (
        <div>
          <h4>{this.props.userName}</h4>
          <LogoutButton />
        </div>
      );
    }
  }
}

export default SecondaryNavigationBar;
