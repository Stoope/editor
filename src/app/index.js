import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Content from "./Content";
import { REMOVE_EDITOR_CONTENT_ITEM } from "~/actions";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex"
  }
});

const App = ({ content, removeItem, mode, classes: { root } }) => (
  <div className={root}>
    <Content removeItem={removeItem} content={content} mode={mode} />
  </div>
);

const mapStateToProps = state => ({
  content: state.content.content,
  mode: state.mode.mode
});

export default connect(
  mapStateToProps,
  { removeItem: REMOVE_EDITOR_CONTENT_ITEM }
)(withStyles(styles)(App));
