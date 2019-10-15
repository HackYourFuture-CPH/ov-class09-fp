import React, { Component } from "react";
import PropTypes from "prop-types";
import SuggestedRouteCard from "./SuggestedRouteCard";

export default class SuggestedRoutesList extends Component {
  state = {
    selectedId: null
  };

  handleClick = id => {
    this.setState({
      selectedId: id
    });
  };

  render() {
    return (
      <div>
        {this.props.routeslist.map(route => {
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

SuggestedRoutesList.propTypes = {
  routesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isSelected: PropTypes.bool.isRequired,
      handleClick: PropTypes.func.isRequired,
      key: PropTypes.number,
      time: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      eta: PropTypes.string.isRequired,
      sailDays: PropTypes.number.isRequired,
      maxWaveHs: PropTypes.number.isRequired,
      avgSpeed: PropTypes.number.isRequired,
      hireCost: PropTypes.number.isRequired,
      consumption: PropTypes.number.isRequired
    })
  )
};
