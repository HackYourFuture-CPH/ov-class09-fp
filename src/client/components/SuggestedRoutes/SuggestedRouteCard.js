import React from "react";
import PropTypes from "prop-types";
import SuggestedRouteDetails from "./SuggestedRouteDetails";
import SuggestedRouteSummary from "./SuggestedRouteSummary";

export default function SuggestedRouteCard({
  time,
  price,
  id,
  isSelected,
  handleClick,
  eta,
  sailDays,
  maxWaveHs,
  avgSpeed,
  hireCost,
  consumption
}) {
  return (
    <div>
      <SuggestedRouteSummary
        time={time}
        price={price}
        id={id}
        isSelected={isSelected}
        handleClick={handleClick}
      />
      <SuggestedRouteDetails
        eta={eta}
        sailDays={sailDays}
        maxWaveHs={maxWaveHs}
        avgSpeed={avgSpeed}
        hireCost={hireCost}
        consumption={consumption}
      />
    </div>
  );
}

SuggestedRouteCard.propTypes = {
  routesList: PropTypes.array
};
