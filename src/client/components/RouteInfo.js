import React, { Component } from "react";
import TitleAndDescribe from "./TitleAndDescribe";
import { background } from "@storybook/theming";

export default class RouteInfo extends Component {
  static defaultProps = {
    eta: "19-08-24 22:15",
    sailDays: "6.5",
    maxWaveHs: "2.8m",
    avgSpeed: "14.3 km",
    hireCost: "$66.808",
    consumption: "$60.600"
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "16.66%",
            float: "left",
            backgroundColor: "#E5E5E5",
            textAlign: "center",
            padding: "10px"
          }}
        >
          <TitleAndDescribe title={"ETA"} description={this.props.eta} />
          <TitleAndDescribe
            title={"SAIL DAYS"}
            description={this.props.sailDays}
          />
          <TitleAndDescribe
            title={"MAX WAVE HS"}
            description={this.props.maxWaveHs}
          />
        </div>
        <div
          style={{
            width: "16.66%",
            float: "left",
            backgroundColor: "#E5E5E5",
            textAlign: "center",
            padding: "10px"
          }}
        >
          <TitleAndDescribe
            title={"AVG SPEED"}
            description={this.props.avgSpeed}
          />
          <TitleAndDescribe
            title={"HIRE COST"}
            description={this.props.hireCost}
          />
          <TitleAndDescribe
            title={"CONSUMPTION"}
            description={this.props.consumption}
          />
        </div>
      </React.Fragment>
    );
  }
}
