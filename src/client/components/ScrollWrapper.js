import React from "react";
import { Box } from "@material-ui/core";

export default function ScrollWrapper({ height, width, children }) {
  return (
    <Box width={width} height={height} overflow="scroll">
      {children}
    </Box>
  );
}
