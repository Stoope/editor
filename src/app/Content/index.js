import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RenderChildren from "./RenderChildren";

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const Content = ({ content, mode, classes: { root } }) => (
  <div className={root}>
    <RenderChildren content={content} mode={mode} />
  </div>
);

export default withStyles(styles)(Content);
