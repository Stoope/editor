import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = () => ({
  item: {
    minHeight: 34 + 15 * 2
  },
  grid: {
    position: "relative"
  }
});

const GridComponent = ({
  children,
  classes: { item, grid },
  mode,
  className,
  ...props
}) => (
  <Grid
    className={grid}
    classes={{ item: classNames(item, className) }}
    {...props}
  >
    {children}
  </Grid>
);

export default withStyles(styles)(GridComponent);
