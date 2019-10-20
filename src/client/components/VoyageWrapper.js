import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function VoyageWrapper({ leftPanel, rightPanel }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          {leftPanel}
        </Grid>
        <Grid item xs={4}>
          {rightPanel}
        </Grid>
      </Grid>
    </div>
  );
}
