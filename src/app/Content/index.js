import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RenderChildren from "./RenderChildren";

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const Content = ({ content, classes: { root } }) => (
  <div className={root}>
    <RenderChildren content={content} />
  </div>
);

export default withStyles(styles)(Content);
