import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Content from "./Content";
import {
  REMOVE_EDITOR_CONTENT_ITEM,
  CHANGE_EDITOR_CONTENT_ITEM,
  COPY_EDITOR_CONTENT_ITEM
} from "~/actions";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex"
  }
});

const App = ({ classes: { root }, ...props }) => (
  <div className={root}>
    <Content {...props} />
  </div>
);

const mapStateToProps = state => ({
  content: state.content.content,
  mode: state.mode.mode
});

export default connect(
  mapStateToProps,
  {
    removeItem: REMOVE_EDITOR_CONTENT_ITEM,
    changeItem: CHANGE_EDITOR_CONTENT_ITEM,
    copyItem: COPY_EDITOR_CONTENT_ITEM
  }
)(withStyles(styles)(App));
