import React from "react";
import PropTypes from "prop-types";

//import material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function SuggestedRouteDetails({
  eta,
  hfo,
  maxWaveHs,
  avgSpeed,
  hireCost,
  lsfo
}) {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Typography>ETA</Typography>
          <Typography>{eta}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>AVG speed</Typography>
          <Typography>{`${avgSpeed}kn`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>MAX wave HS</Typography>
          <Typography>{`${maxWaveHs}m`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>HIRE cost</Typography>
          <Typography>{`$${hireCost}`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>HFO consumption</Typography>
          <Typography>{hfo}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>LSFO consumtion</Typography>
          <Typography>{lsfo}</Typography>
        </Grid>
      </Grid>
    </Container>
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
