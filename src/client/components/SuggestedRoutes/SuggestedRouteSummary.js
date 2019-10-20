import React from "react";
import PropTypes from "prop-types";

//import material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  cardHeader: {
    color: "red"
  },
  infoText: {
    color: "blue",
    fontSize: "0.9rem",
    marginBottom: "5px",
    paddingLeft: "16px"
  },
  describeText: {
    color: "yellow",
    fontSize: "1.2rem",
    marginBottom: "30px",
    paddingLeft: "16px"
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
    <Card className={classes.card}>
      {!isSelected ? (
        <CardContent>
          <Typography className={classes.infoText}>DURATION</Typography>
          <Typography className={classes.describeText}>{duration}</Typography>
          <Typography className={classes.infoText}>TOTAL COST</Typography>
          <Typography
            className={classes.describeText}
          >{`$${price}`}</Typography>
          <button onClick={selectRouteBtn}>SELECT ROUTE </button>
        </CardContent>
      ) : (
        <CardContent>
          <CardHeader className={classes.cardHeader} title="SELECTED ROUTES" />
          <Typography className={classes.infoText}>DURATION</Typography>
          <Typography className={classes.describeText}>{duration}</Typography>
          <Typography className={classes.infoText}>TOTAL COST</Typography>
          <Typography
            className={classes.describeText}
          >{`$${price}`}</Typography>
        </CardContent>
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
