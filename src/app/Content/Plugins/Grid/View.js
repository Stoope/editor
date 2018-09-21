import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import classNames from "classnames";

const styles = () => ({
  grid: {
    position: "relative",
    minHeight: 34 + 25 * 2
  }
});

const GridComponent = ({
  children,
  classes: { grid },
  mode,
  className,
  color,
  hidden,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  alignItems,
  justifyContent,
  flexDirection,
  bgImageSrc,
  backgroundRepeat,
  backgroundPosition,
  backgroundAttachment,
  backgroundSize,
  only,
  ...props
}) => (
  <Hidden only={only}>
    <Grid
      className={classNames(grid, className)}
      style={{
        backgroundColor: color,
        paddingBottom,
        paddingTop,
        paddingLeft,
        paddingRight,
        alignItems,
        justifyContent,
        flexDirection,
        backgroundImage: `url(${bgImageSrc})`,
        backgroundRepeat,
        backgroundPosition,
        backgroundAttachment,
        backgroundSize
      }}
      {...props}
    >
      {children}
    </Grid>
  </Hidden>
);

export default {
  Component: withStyles(styles)(GridComponent),
  id: "Grid",
  name: "Контейнер",
  defaultState: {
    type: "Grid",
    container: true,
    content: null
  },
  preview: null
};
