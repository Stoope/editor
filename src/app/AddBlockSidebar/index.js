import React from "react";
import { connect } from "react-redux";
import { CHANGE_EDITOR_MODE } from "@/actions";
import Drawer from "@material-ui/core/Drawer";

class AddBlockSidebar extends React.Component {
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
      <Drawer
        anchor="bottom"
        variant="persistent"
        open
        onClose={this.onClose}
        onOpen={this.onOpen}
      >
        <div>ddd</div>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.mode.mode
});

export default connect(
  mapStateToProps,
  { CHANGE_EDITOR_MODE }
)(AddBlockSidebar);
