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

//CSS Colors: #F2F2F2,#D9D9D9,#595959,#262626,#0D0D0D
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
  departureFrom,
  arrivesAt,
  departure_time,
  target_arrival_time,
  link
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.headerTitle} title={vesselName} />
      <CardContent>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.infoTitle}>DEPARTURE</Typography>
            <Typography className={classes.describeText}>
              {departureFrom}
            </Typography>
            <Typography className={classes.describeText}>
              {departure_time}
            </Typography>
          </Grid>
          <Grid itemxs={6} sm={3}>
            <Typography className={classes.infoTitle}>ETA</Typography>
            <Typography className={classes.describeText}>
              {arrivesAt}
            </Typography>
            <Typography className={classes.describeText}>
              {target_arrival_time}
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
  departureFrom: PropTypes.string,
  departure_time: PropTypes.string,
  arrivesAt: PropTypes.string,
  target_arrival_time: PropTypes.string,
  activeDetails: PropTypes.bool
};

export default VoyageTeaser;
