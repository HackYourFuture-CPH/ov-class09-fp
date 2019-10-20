import React, { Component } from "react";
import SecondaryNavigationBar from "../components/SecondaryNavigationBar";

export default class AdminContainer extends Component {
  render() {
    return (
      <div>
        <SecondaryNavigationBar />
        <p>This is the Admin Page ;)</p>
      </div>
    );
  }
}
