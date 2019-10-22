import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function ScrollWrapper({ height, width, children }) {
  const useStyles = makeStyles({
    box: {
      overflowY: "scroll",
      paddingRight: "24px"
    }
  });
  const classes = useStyles();

  return (
    <Box
      className={classes.box}
      width={width}
      height={height}
      overflow="scroll"
    >
      {children}
    </Box>
  );
}
