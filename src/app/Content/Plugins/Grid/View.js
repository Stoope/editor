import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = () => ({
  grid: {
    position: "relative",
    minHeight: 34 + 15 * 2
  }
});

const GridComponent = ({
  children,
  classes: { grid },
  mode,
  className,
  ...props
}) => (
  <Grid className={classNames(grid, className)} {...props}>
    {children}
  </Grid>
);

export default withStyles(styles)(GridComponent);
