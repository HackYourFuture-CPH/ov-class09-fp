import React, { Fragment } from "react";
import Field from "../Field";

export default function SuggestedRouteDetails({
  eta,
  sailDays,
  maxWaveHs,
  avgSpeed,
  hireCost,
  consumption
}) {
  return (
    <Fragment>
      <div>
        <Field title={"ETA"} description={eta} />
        <Field title={"SAIL DAYS"} description={sailDays} />
        <Field title={"MAX WAVE HS"} description={maxWaveHs} />
      </div>
      <div>
        <Field title={"AVG SPEED"} description={avgSpeed} />
        <Field title={"HIRE COST"} description={hireCost} />
        <Field title={"CONSUMPTION"} description={consumption} />
      </div>
    </Fragment>
  );
}
