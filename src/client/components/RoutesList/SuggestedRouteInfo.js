import React, { Component } from "react";
import TitleAndDescribe from "./TitleAndDescribe";
import { background } from "@storybook/theming";

export default class SuggestedRouteInfo extends Component {
  static defaultProps = {
    eta: "19-08-24 22:15",
    sailDays: "6.5",
    maxWaveHs: "2.8m",
    avgSpeed: "14.3 km",
    hireCost: "$66.808",
    consumption: "$60.600"
  };
  render() {
    const {
      eta,
      sailDays,
      maxWaveHs,
      avgSpeed,
      hireCost,
      consumption
    } = this.props;

    return (
      <React.Fragment>
        <div>
          <TitleAndDescribe title={"ETA"} description={eta} />
          <TitleAndDescribe title={"SAIL DAYS"} description={sailDays} />
          <TitleAndDescribe title={"MAX WAVE HS"} description={maxWaveHs} />
        </div>
        <div>
          <TitleAndDescribe title={"AVG SPEED"} description={avgSpeed} />
          <TitleAndDescribe title={"HIRE COST"} description={hireCost} />
          <TitleAndDescribe title={"CONSUMPTION"} description={consumption} />
        </div>
      </React.Fragment>
    );
  }
}
