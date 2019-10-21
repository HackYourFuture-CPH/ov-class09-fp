import React, { Component } from "react";
import DataCard from "./DataCard";
import { CardGroup, CardGroupHeader } from "./CardGroup";
import VoyageTeaser from "./VoyageTeaser";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
const useStyles = makeStyles({
  card: {
    minWidth: 300,
    marginTop: "0.75rem",
    marginRight: "0.75rem",
    marginLeft: "0.75rem"
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
  },
  button: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#0B3C61"
  },
  actionCard: {
    float: "right"
  }
});

function VoyageDetails({
  vesselName,
  departFrom,
  arriveAt,
  departureTime,
  targetArrivalTime,
  date,
  latitude,
  longitude,
  hsfo,
  ulsfo
}) {
  const classes = useStyles();
  return (
    <>
      <VoyageTeaser
        vesselName={vesselName}
        departFrom={departFrom}
        arriveAt={arriveAt}
        departureTime={departureTime}
        targetArrivalTime={targetArrivalTime}
      />
      <Card className={classes.card}>
        <CardContent>
          <CardHeader className={classes.headerTitle} title="Position" />
          <CardContent>
            <Grid container>
              <Grid item xs={6} sm={3}>
                <Typography className={classes.infoTitle}>Date</Typography>
                <Typography className={classes.describeText}>{date}</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography className={classes.infoTitle}>Latitude</Typography>
                <Typography className={classes.describeText}>
                  {latitude}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography className={classes.infoTitle}>Longitude</Typography>
                <Typography className={classes.describeText}>
                  {longitude}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardHeader className={classes.headerTitle} title="Consumption" />
          <CardContent>
            <Grid container>
              <Grid item xs={6} sm={3}>
                <Typography className={classes.infoTitle}>HSFO</Typography>
                <Typography className={classes.describeText}>{hsfo}</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography className={classes.infoTitle}>ULSFO</Typography>
                <Typography className={classes.describeText}>
                  {ulsfo}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography className={classes.infoTitle}>FOC Total</Typography>
                <Typography className={classes.describeText}>
                  {hsfo + ulsfo}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardContent>
      </Card>
    </>
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
