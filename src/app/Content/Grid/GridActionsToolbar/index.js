import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";

const styles = () => ({
  root: {
    position: "absolute",
    right: 15,
    top: 15,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  iconSmall: {
    fontSize: 20
  },
  actionButton: {
    borderRadius: 0,
    minWidth: 44
  }
});

class GridActionsToolbar extends React.Component {
  removeItem = () => {
    const { removeItem, id } = this.props;
    removeItem(id);
  };
  render() {
    const {
      classes: { root, actionButton, iconSmall },
      display
    } = this.props;
    return (
      <Zoom in={display}>
        <div className={root}>
          <Button
            onClick={this.removeItem}
            size="small"
            variant="contained"
            className={actionButton}
          >
            <Delete className={iconSmall} />
          </Button>
          <Button size="small" variant="contained" className={actionButton}>
            <Delete className={iconSmall} />
          </Button>
          <Button size="small" variant="contained" className={actionButton}>
            <Delete className={iconSmall} />
          </Button>
        </div>
      </Zoom>
    );
  }
}

export default withStyles(styles)(GridActionsToolbar);
