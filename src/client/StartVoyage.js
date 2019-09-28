import React, { Component } from "react";
import Dropdown from "./components/Dropdown";
import Checkbox from "./components/Checkbox";

class StartVoyage extends Component {
  render() {
    return (
      <div>
        <Dropdown
          label="Test"
          portsMap={[
            {
              lat: 51.45,
              depth: -11,
              lon: -3.0,
              name: "newpoint"
            },
            {
              lat: 28.1083,
              depth: -333,
              lon: -15.3617,
              name: "las palmas"
            }
          ]}
        />
        <Checkbox label="checkbox" />
      </div>
    );
  }
}

export default StartVoyage;
