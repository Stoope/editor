import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";

const styles = () => ({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    margin: "0 auto",
    zIndex: 1,
    width: 40
  }
});

class AddButton extends React.Component {
  addBlock = () => {
    const { openAddBlockSidebar, id } = this.props;
    if (openAddBlockSidebar != null) {
      openAddBlockSidebar({
        id,
        props: {
          xs: 12
        },
        type: "container"
      });
    }
  };
  render() {
    const {
      classes: { root },
      className
    } = this.props;
    return (
      <div className={classNames(root, className)}>
        <Tooltip title="Добавить блок">
          <Button
            onClick={this.addBlock}
            variant="fab"
            color="primary"
            mini
            aria-label="Add"
          >
            <AddIcon />
          </Button>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(styles)(AddButton);
