import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = () => ({
  container: {
    minHeight: 34 + 15 * 2,
    transition: "all 0.2s ease-out",
    margin: -2,
    border: "2px dashed rgba(204, 204, 204, 0)"
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
    className={grid}
    classes={{ container: classNames(container, className) }}
    {...props}
  >
    {children}
  </Grid>
);

export default withStyles(styles)(GridComponent);
