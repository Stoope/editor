import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RenderChildren from "./RenderChildren";

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const Content = ({ classes: { root }, ...props }) => (
  <div className={root}>
    <RenderChildren {...props} />
  </div>
);

export default withStyles(styles)(Content);
