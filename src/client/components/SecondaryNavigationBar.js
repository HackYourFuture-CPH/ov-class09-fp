import React, { Component } from "react";
import Button from "./Button";
class SecondaryNavigationBar extends Component {
  state = {
    userName: "",
    userRole: ""
  };

  render() {
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
          <Button label={"Logout"} />
        </div>
      );
    } else {
      return (
        <div>
          <h4>{this.props.userName}</h4>
          <Button label={"Logout"} />
        </div>
      );
    }
  }
}

export default SecondaryNavigationBar;
