import React from "react";
import { connect } from "react-redux";
import { CHANGE_EDITOR_MODE } from "~/actions";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

class Sidebar extends React.Component {
  onOpen = () => {
    const { CHANGE_EDITOR_MODE } = this.props;
    CHANGE_EDITOR_MODE("adding");
  };
  onClose = () => {
    const { CHANGE_EDITOR_MODE } = this.props;
    CHANGE_EDITOR_MODE("editing");
  };
  render() {
    const { mode } = this.props;
    return (
      <SwipeableDrawer
        open={mode === "adding"}
        onClose={this.onClose}
        onOpen={this.onOpen}
      >
        <div>ddd</div>
      </SwipeableDrawer>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.mode.mode
});

export default connect(
  mapStateToProps,
  { CHANGE_EDITOR_MODE }
)(Sidebar);
