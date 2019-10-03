import React, { Component } from "react";
import SuggestedRouteBox from "./SuggestedRouteBox";

export default class SuggestedRoutesList extends Component {
  state = {
    selectedId: null
  };

  handleClick = id => {
    this.setState({
      ...this.state,
      selectedId: id
    });
  };

  render() {
    return (
      <div>
        {this.props.list.map(i => {
          return (
            <SuggestedRouteBox
              id={i.suggested_route_id}
              isSelected={i.suggested_route_id === this.state.selectedId}
              handleClick={this.handleClick}
              key={i.suggested_route_id}
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
