import React from "react";
import PropTypes from "prop-types";

//import material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

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

function VoyageTeaser({
  id,
  vesselName,
  departFrom,
  arriveAt,
  departureTime,
  targetArrivalTime,
  link
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.headerTitle} title={vesselName} />
      <CardContent>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <Typography className={classes.infoTitle}>DEPARTURE</Typography>
            <Typography className={classes.describeText}>
              {departFrom}
            </Typography>
            <Typography className={classes.describeText}>
              {departureTime}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography className={classes.infoTitle}>ETA</Typography>
            <Typography className={classes.describeText}>{arriveAt}</Typography>
            <Typography className={classes.describeText}>
              {targetArrivalTime}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {link ? (
        <CardActions className={classes.actionCard}>
          <Button variant="contained" href={link} className={classes.button}>
            Show Details
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}

VoyageTeaser.propTypes = {
  id: PropTypes.number,
  vesselName: PropTypes.string,
  departFrom: PropTypes.string,
  departureTime: PropTypes.string,
  arriveAt: PropTypes.string,
  targetArrivalTime: PropTypes.string
};

export default VoyageTeaser;
