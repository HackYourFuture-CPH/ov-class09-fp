import React, { Component } from "react";
import TitleAndDescribe from "./TitleAndDescribe";
import { background } from "@storybook/theming";

export default class SuggestedRouteInfo extends Component {
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
