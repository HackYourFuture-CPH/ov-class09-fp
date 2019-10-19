import React from "react";
import PropTypes from "prop-types";
import SuggestedRouteDetails from "./SuggestedRouteDetails";
import SuggestedRouteSummary from "./SuggestedRouteSummary";

export default function SuggestedRouteCard({
  duration,
  price,
  id,
  isSelected,
  handleClick,
  eta,
  hfo,
  maxWaveHs,
  avgSpeed,
  hireCost,
  lsfo
}) {
  return (
    <div>
      <SuggestedRouteSummary
        duration={duration}
        price={price}
        id={id}
        isSelected={isSelected}
        handleClick={handleClick}
      />
      <h2>{isSelected}</h2>
      <SuggestedRouteDetails
        eta={eta}
        hfo={hfo}
        maxWaveHs={maxWaveHs}
        avgSpeed={avgSpeed}
        hireCost={hireCost}
        lsfo={lsfo}
      />
    </div>
  );
}

SuggestedRouteCard.propTypes = {
  routesList: PropTypes.array
};
