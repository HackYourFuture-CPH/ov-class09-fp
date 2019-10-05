import React, { Fragment } from "react";
import TitleAndDescribe from "../TitleAndDescribe";

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
        <TitleAndDescribe title={"ETA"} description={eta} />
        <TitleAndDescribe title={"SAIL DAYS"} description={sailDays} />
        <TitleAndDescribe title={"MAX WAVE HS"} description={maxWaveHs} />
      </div>
      <div>
        <TitleAndDescribe title={"AVG SPEED"} description={avgSpeed} />
        <TitleAndDescribe title={"HIRE COST"} description={hireCost} />
        <TitleAndDescribe title={"CONSUMPTION"} description={consumption} />
      </div>
    </Fragment>
  );
}
