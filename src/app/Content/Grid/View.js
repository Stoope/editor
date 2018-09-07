import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = () => ({
  container: {
    minHeight: 100,
    transition: "outline-backcolorground 0.2s ease-out",
    outline: "2px dashed rgba(204, 204, 204, 0)"
  },
  grid: {
    position: "relative"
  }
});

const GridComponent = ({
  children,
  classes: { container, grid },
  mode,
  className,
  ...props
}) => (
  <Grid
    className={classNames(grid, className)}
    classes={{ container }}
    {...props}
  >
    {children}
  </Grid>
);

export default withStyles(styles)(GridComponent);
