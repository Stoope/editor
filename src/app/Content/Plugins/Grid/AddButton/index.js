import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";

const styles = () => ({
  root: {
    position: "absolute",
    width: 40,
    zIndex: 1
  },
  rootBlock: {
    right: 0,
    top: "calc(100% / 2 - 20px)"
  },
  rootSection: {
    left: "calc(100% / 2 - 20px)",
    bottom: 0
  }
});

class AddButton extends React.Component {
  addBlock = () => {
    const { openAddBlockSidebar, id, isSection } = this.props;
    if (openAddBlockSidebar != null) {
      openAddBlockSidebar(
        isSection
          ? {
              id,
              props: {
                xs: 6
              },
              type: "container"
            }
          : {
              id,
              props: {
                xs: 6
              },
              type: "item"
            }
      );
    }
  };
  render() {
    const {
      classes: { root, rootSection, rootBlock },
      className,
      isSection
    } = this.props;
    const buttonColor = isSection ? "default" : "secondary";
    return (
      <div
        className={classNames(
          root,
          className,
          isSection ? rootSection : rootBlock
        )}
      >
        <Tooltip title="Добавить блок">
          <Button
            onClick={this.addBlock}
            variant="fab"
            color={buttonColor}
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
