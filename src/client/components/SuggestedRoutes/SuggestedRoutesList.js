import React, { Component } from "react";
import SuggestedRouteCard from "./SuggestedRouteCard";

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
        {this.props.Routeslist.map(route => {
          return (
            <SuggestedRouteCard
              id={route.suggested_route_id}
              isSelected={route.suggested_route_id === this.state.selectedId}
              handleClick={this.handleClick}
              key={route.suggested_route_id}
              time={route.time}
              price={route.price}
              eta={route.eta}
              sailDays={route.sailDays}
              maxWaveHs={route.maxWaveHs}
              avgSpeed={route.avgSpeed}
              hireCost={route.hireCost}
              consumption={route.consumption}
            />
          );
        })}
      </div>
    );
  }
}
