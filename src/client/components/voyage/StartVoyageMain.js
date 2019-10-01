import React, { Component } from "react";
import StartVoyage from "./StartVoyage";
import data from "./data";

class StartVoyageMain extends Component {
  render() {
    return (
      <div>
        <StartVoyage
          ports={data.ports}
          vessels={data.vessels}
          optimisationType={data.optimisationType}
          min_Draft={data.min_Draft}
          max_Draft={data.max_Draft}
          draft_StepSize={data.draft_StepSize}
          draft_Unit={data.draft_Unit}
          min_fuelCost={data.min_fuelCost}
          max_fuelCost={data.max_fuelCost}
          fuelCost_stepSize={data.fuelCost_stepSize}
          fuelCost_Unit={data.fuelCost_Unit}
          min_rate={data.min_rate}
          max_rate={data.max_rate}
          rate_stepSize={data.rate_stepSize}
          rate_Unit={data.rate_Unit}
        />
      </div>
    );
  }
}
export default StartVoyageMain;
