import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Field from "../Field";

export default function SuggestedRouteDetails({
  eta,
  hfo,
  maxWaveHs,
  avgSpeed,
  hireCost,
  lsfo
}) {
  return (
    <Fragment>
      <div>
        <Field title={"ETA"} description={eta} />
        <Field title={"HFO CONSUMPTION"} description={hfo} />
        <Field title={"MAX WAVE HS"} description={`${maxWaveHs}m`} />
      </div>
      <div>
        <Field title={"AVG SPEED"} description={`${avgSpeed}kn`} />
        <Field title={"HIRE COST"} description={`$${hireCost}`} />
        <Field title={"LSFO CONSUMPTION"} description={lsfo} />
      </div>
    </Fragment>
  );
}

SuggestedRouteDetails.propTypes = {
  eta: PropTypes.string.isRequired,
  hfo: PropTypes.number.isRequired,
  maxWaveHs: PropTypes.number.isRequired,
  avgSpeed: PropTypes.number.isRequired,
  hireCost: PropTypes.number.isRequired,
  lsfo: PropTypes.number.isRequired
};
