import React from "react";
import PropTypes from "prop-types";
import SuggestedRouteCard from "./SuggestedRouteCard";
var moment = require("moment-timezone");

export default function SuggestedRoutesList({ routeslist, handleSelectRoute }) {
  {
    const suggestedRoutes = routeslist.map(route => {
      let eta = moment(route.eta);
      let departureTime = moment(route.departure_time);
      let duration = moment.duration(eta.diff(departureTime));
      const durationString = `${duration.days()} Days ${duration.hours()} Hours`;

      const hoursInDays = duration.days() + duration.hours() / 24;

      const hireCost = hoursInDays * route.hirerate;
      return (
        <SuggestedRouteCard
          key={route.id}
          id={route.id}
          isSelected={route.selected_route_id === route.id}
          handleClick={handleSelectRoute}
          duration={durationString}
          price={route.total_cost}
          eta={moment(route.eta).format("YYYY-MM-DD HH:MM")}
          hfo={route.hfo}
          maxWaveHs={route.max_wave_height}
          avgSpeed={route.avgspeed}
          hireCost={Math.round(hireCost)}
          lsfo={route.lsfo}
        />
      );
    });
    return <div>{suggestedRoutes}</div>;
  }
}

SuggestedRoutesList.propTypes = {
  routesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isSelected: PropTypes.bool,
      handleClick: PropTypes.func.isRequired,
      key: PropTypes.number,
      time: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      eta: PropTypes.string.isRequired,
      hfo: PropTypes.number.isRequired,
      maxWaveHs: PropTypes.number.isRequired,
      avgSpeed: PropTypes.number.isRequired,
      hireCost: PropTypes.number.isRequired,
      consumption: PropTypes.number.isRequired
    })
  )
};
