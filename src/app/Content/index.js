import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RenderChildren from "./RenderChildren";

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const Content = ({ content, removeItem, mode, classes: { root } }) => (
  <div className={root}>
    <RenderChildren removeItem={removeItem} content={content} mode={mode} />
  </div>
);

export default withStyles(styles)(Content);
