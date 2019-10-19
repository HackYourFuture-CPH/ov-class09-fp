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
        <Field title={"HFO consumption"} description={hfo} />
        <Field title={"MAX wave HS"} description={`${maxWaveHs}m`} />
      </div>
      <div>
        <Field title={"AVG speed"} description={`${avgSpeed}kn`} />
        <Field title={"HIRE cost"} description={`$${hireCost}`} />
        <Field title={"LSFO consumtion"} description={lsfo} />
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
