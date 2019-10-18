import React, { Component } from "react";
import VoyageTeaser from "./VoyageTeaser";
import PropTypes from "prop-types";

// import material-ui
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// CSS
const useStyles = makeStyles(theme => ({
  card: { display: "inline-block", backgroundColor: "#D9D9D9", minWidth: 300 },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  infoTitle: {
    color: "#595959",
    fontSize: "0.9rem"
  },
  describeText: {
    color: "#262626",
    fontSize: "1.2rem"
  }
}));

function VoyageDetails({
  vesselName,
  departsFrom,
  arrivesAt,
  departure_time,
  target_arrival_time,
  date,
  latitude,
  longitude,
  hsfo,
  ulsfo
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.card}>
      <VoyageTeaser
        vesselName={vesselName}
        departureFrom={departsFrom}
        arrivesAt={arrivesAt}
        departure_time={departure_time}
        target_arrival_time={target_arrival_time}
      />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.infoTitle}>Position</Typography>
          <Typography className={classes.describeText}>
            Date : {date}
          </Typography>
          <Typography className={classes.describeText}>
            Latitude : {latitude}
          </Typography>
          <Typography className={classes.describeText}>
            Longitude : {longitude}
          </Typography>
          <Typography className={classes.infoTitle}>Consumption</Typography>
          <Typography className={classes.describeText}>
            HSFO : {hsfo}
          </Typography>
          <Typography className={classes.describeText}>
            ULSGO : {ulsfo}
          </Typography>
          <Typography className={classes.describeText}>
            Total : {hsfo + ulsfo}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

VoyageDetails.propTypes = {
  vesselName: PropTypes.string,
  departsFrom: PropTypes.string,
  arrivesAt: PropTypes.string,
  departure_time: PropTypes.string,
  target_arrival_time: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  hsfo: PropTypes.number,
  ulsfo: PropTypes.number
};

export default VoyageDetails;
