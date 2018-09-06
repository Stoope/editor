import React from "react";
import Grid from "@material-ui/core/Grid";

const GridComponent = ({ children, ...props }) => (
  <Grid {...props}>{children}</Grid>
);

export default GridComponent;
