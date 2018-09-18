import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";

const styles = () => ({
  root: {
    position: "absolute",
    right: 0,
    top: "calc(100% / 2 - 20px)",
    zIndex: 1,
    width: 40
  }
});

class AddButtonInline extends React.Component {
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
      className
    } = this.props;
    return (
      <div className={classNames(root, className)}>
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
    );
  }
}

export default withStyles(styles)(AddButtonInline);
