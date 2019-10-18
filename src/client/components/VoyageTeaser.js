import React from "react";
import PropTypes from "prop-types";

//import material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//CSS Colors: #F2F2F2,#D9D9D9,#595959,#262626,#0D0D0D
const voyage_teaser = makeStyles({
  card: {
    display: "inline-block",
    backgroundColor: "#F2F2F2"
  },
  summery: {
    display: "inline-block"
  },
  headerTitle: {
    color: "#0D0D0D",
    fontSize: "1.5rem"
  },
  infoTitle: {
    color: "#595959",
    fontSize: "0.9rem"
  },
  describeText: {
    color: "#262626",
    fontSize: "1.2rem"
  }
});

function VoyageTeaser({
  id,
  vesselName,
  departureFrom,
  arrivesAt,
  departure_time,
  target_arrival_time
}) {
  const classes = voyage_teaser();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.headerTitle}>{vesselName}</Typography>
        <CardContent className={classes.summery}>
          <Typography className={classes.infoTitle}>DEPARTURE</Typography>
          <Typography className={classes.describeText}>
            {departureFrom}
          </Typography>
          <Typography className={classes.describeText}>
            {departure_time}
          </Typography>
        </CardContent>
        <CardContent className={classes.summery}>
          <Typography className={classes.infoTitle}>ETA</Typography>
          <Typography className={classes.describeText}>{arrivesAt}</Typography>
          <Typography className={classes.describeText}>
            {target_arrival_time}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Show Details</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

VoyageTeaser.propTypes = {
  id: PropTypes.number,
  vesselName: PropTypes.string,
  departureFrom: PropTypes.string,
  departure_time: PropTypes.string,
  arrivesAt: PropTypes.string,
  target_arrival_time: PropTypes.string
};

export default VoyageTeaser;
