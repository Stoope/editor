import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";

const styles = () => ({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -20,
    margin: "0 auto",
    zIndex: 1
  }
});

class GridActionsToolbar extends React.Component {
  state = {};
  render() {
    const {
      classes: { root },
      display
    } = this.props;
    return (
      <Tooltip title="Добавить блок">
        <Zoom in={display}>
          <Button
            variant="fab"
            color="primary"
            mini
            aria-label="Add"
            className={root}
          >
            <AddIcon />
          </Button>
        </Zoom>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(GridActionsToolbar);
