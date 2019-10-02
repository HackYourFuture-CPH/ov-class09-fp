import React, { Component } from "react";
import SuggestedRouteBox from "./SuggestedRouteBox";

export default class SuggestedRoutesList extends Component {
  state = {
    selectedID: 2
  };

  handleSelect = id => {
    this.setState({ selectedID: id });
  };

  render() {
    return (
      <div>
        {this.props.list.map((i, index) => {
          return (
            <SuggestedRouteBox
              onSelect={this.handleSelect}
              id={index}
              isSelected={true}
              suggested_route_id={i.suggested_route_id}
              time={i.time}
              price={i.price}
              eta={i.eta}
              sailDays={i.sailDays}
              maxWaveHs={i.maxWaveHs}
              avgSpeed={i.avgSpeed}
              hireCost={i.hireCost}
              consumption={i.consumption}
            />
          );
        })}
      </div>
    );
  }
}
