import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Content from "./Content";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex"
  }
});

const App = ({ content, mode, classes: { root } }) => (
  <div className={root}>
    <Content content={content} mode={mode} />
  </div>
);

const mapStateToProps = state => ({
  content: state.content.content,
  mode: state.mode.mode
});

export default connect(mapStateToProps)(withStyles(styles)(App));
