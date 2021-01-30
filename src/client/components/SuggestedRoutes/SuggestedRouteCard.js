import React from "react";
import PropTypes from "prop-types";
import SuggestedRouteDetails from "./SuggestedRouteDetails";
import SuggestedRouteSummary from "./SuggestedRouteSummary";

//import material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

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
    <Card>
      <Grid container>
        <Grid item xs={4}>
          <SuggestedRouteSummary
            duration={duration}
            price={price}
            id={id}
            isSelected={isSelected}
            handleClick={handleClick}
          />
        </Grid>
        <Grid item xs={6}>
          <h2>{isSelected}</h2>
          <SuggestedRouteDetails
            eta={eta}
            hfo={hfo}
            maxWaveHs={maxWaveHs}
            avgSpeed={avgSpeed}
            hireCost={hireCost}
            lsfo={lsfo}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

SuggestedRouteCard.propTypes = {
  routesList: PropTypes.array
};
