import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "../Tooltip";

const styles = () => ({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -20,
    margin: "0 auto",
    zIndex: 1,
    width: 40
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
      <Zoom unmountOnExit in={display}>
        <div className={root}>
          <Tooltip title="Добавить блок">
            <Button variant="fab" color="primary" mini aria-label="Add">
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </Zoom>
    );
  }
}

export default withStyles(styles)(GridActionsToolbar);