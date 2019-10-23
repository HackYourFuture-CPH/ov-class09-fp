import React, { Component } from "react";
import DataCard from "./DataCard";
import { CardGroup, CardGroupHeader } from "./CardGroup";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  card: {
    width: "100%",
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

function CostWidget({
  totalCost,
  hfoCost,
  lsfoCost,
  hfoConsumption,
  lsfoConsumption
}) {
  const currentCost = hfoCost * hfoConsumption + lsfoCost * lsfoConsumption;
  const remainingCost = totalCost - currentCost;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.headerTitle} title="Cost Widget" />
      <CardContent>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Typography className={classes.infoTitle}>Total Cost</Typography>
            <Typography className={classes.describeText}>
              {totalCost}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography className={classes.infoTitle}>Current Cost</Typography>
            <Typography className={classes.describeText}>
              {currentCost}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography className={classes.infoTitle}>
              Remaining Cost
            </Typography>
            <Typography className={classes.describeText}>
              {remainingCost}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

CostWidget.propTypes = {
  totalCost: PropTypes.number.isRequired,
  hfoCost: PropTypes.number.isRequired,
  lsfoCost: PropTypes.number.isRequired,
  hfoConsumption: PropTypes.number.isRequired,
  lsfoConsumption: PropTypes.number.isRequired
};

export default CostWidget;
