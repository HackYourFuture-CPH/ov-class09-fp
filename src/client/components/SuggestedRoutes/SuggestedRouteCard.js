import React from "react";
import SuggestedRouteDetails from "./SuggestedRouteDetails";
import SuggestedRouteSummary from "./SuggestedRouteSummary";

export default function SuggestedRouteCard(props) {
  return (
    <div>
      <SuggestedRouteSummary
        time={props.time}
        price={props.price}
        id={props.id}
        isSelected={props.isSelected}
        handleClick={props.handleClick}
      />
      <SuggestedRouteDetails
        eta={props.eta}
        sailDays={props.sailDays}
        maxWaveHs={props.maxWaveHs}
        avgSpeed={props.avgSpeed}
        hireCost={props.hireCost}
        consumption={props.consumption}
      />
    </div>
  );
}
