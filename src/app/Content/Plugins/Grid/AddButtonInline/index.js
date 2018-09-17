import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "../Tooltip";

const styles = () => ({
  root: {
    position: "absolute",
    right: 0,
    top: "calc(100% / 2 - 20px)",
    zIndex: 1,
    width: 40
  }
});

class GridActionsToolbar extends React.Component {
  addBlock = () => {
    const { openAddBlockSidebar, id } = this.props;

    if (openAddBlockSidebar != null) {
      openAddBlockSidebar({
        id,
        props: {
          xs: 6
        },
        type: "item"
      });
    }
  };
  render() {
    const {
      classes: { root },
      display
    } = this.props;
    return (
      <Zoom unmountOnExit in={display}>
        <div className={root}>
          <Tooltip title="Добавить блок">
            <Button
              onClick={this.addBlock}
              variant="fab"
              color="secondary"
              mini
              aria-label="Add"
            >
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </Zoom>
    );
  }
}

export default withStyles(styles)(GridActionsToolbar);
