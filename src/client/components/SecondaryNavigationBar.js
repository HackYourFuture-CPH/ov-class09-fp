import React, { Component } from "react";

class SecondaryNavigationBar extends Component {
  state = {
    userName: "",
    userRole: ""
  };

  render() {
    // this.setState({
    //     userName: "Fowad",
    //     userRole: "superuser"
    // });
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
        </div>
      );
    } else {
      return (
        <div>
          <h4>{this.props.userName}</h4>
        </div>
      );
    }
  }
}

export default SecondaryNavigationBar;
