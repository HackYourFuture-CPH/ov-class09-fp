import React from "react";
import PropTypes from "prop-types";

//import material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  cardHeader: {
    fontSize: "0.5rem"
  },
  infoText: {
    fontSize: "0.9rem"
  },
  describeText: {
    fontSize: "1.2rem"
  }
});

export default function SuggestedRouteSummary({
  id,
  isSelected,
  handleClick,
  duration,
  price
}) {
  const classes = useStyles();

  const selectRouteBtn = () => {
    handleClick(id);
  };

  return (
    <Card>
      {!isSelected ? (
        <CardContent>
          <Typography className={classes.infoText}>DURATION</Typography>
          <Typography className={classes.describeText}>{duration}</Typography>
          <Typography className={classes.infoText}>TOTAL COST</Typography>
          <Typography
            className={classes.describeText}
          >{`$${price}`}</Typography>
          <Button onClick={selectRouteBtn}>SELECT ROUTE</Button>
        </CardContent>
      ) : (
        <>
          <CardHeader className={classes.cardHeader} title="SELECTED ROUTES" />
          <CardContent>
            <Typography className={classes.infoText}>DURATION</Typography>
            <Typography className={classes.describeText} gutterBottom>
              {duration}
            </Typography>
            <Typography className={classes.infoText}>TOTAL COST</Typography>
            <Typography
              className={classes.describeText}
              gutterBottom
            >{`$${price}`}</Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
}

SuggestedRouteSummary.propTypes = {
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
