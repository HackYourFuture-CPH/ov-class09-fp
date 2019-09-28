import React, { Component } from "react";
import Dropdown from "../components/voyage/Dropdown";
import Checkbox from "../components/voyage/Checkbox";
import NavButton from "../components/voyage/NavButton";

class StartVoyage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vessels: []
    };
  }

  componentDidMount() {
    fetch()
      .then(res => res.json())
      .then(data => this.setState({ vessels: data }));
  }
  render() {
    return (
      <div>
        <NavButton label="Start" />
        <Dropdown
          label="Choose vessel"
          optionsMap={[
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
