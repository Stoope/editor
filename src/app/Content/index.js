import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RenderChildren from "./RenderChildren";

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const Content = ({ classes: { root }, ...props }) => (
  <Grid container className={root}>
    <RenderChildren {...props} />
  </Grid>
);

export default withStyles(styles)(Content);
