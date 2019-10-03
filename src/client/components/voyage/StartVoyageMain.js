import React, { Component } from "react";
import StartVoyage from "./StartVoyage";
import data from "../../stories/data/data";

class StartVoyageMain extends Component {
  render() {
    return (
      <div>
        <StartVoyage
          ports={data.ports}
          vessels={data.vessels}
          optimisationType={data.optimisationType}
        />
      </div>
    );
  }
}
export default StartVoyageMain;
