import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Fade from "@material-ui/core/Fade";
import View from "./View";

const styles = () => ({
  dashedBorder: {
    outline: "2px dashed rgba(204, 204, 204, 1)"
  },
  addButton: {
    position: "absolute",
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  addButtonTop: {
    top: 0
  },
  addButtonBottom: {
    bottom: -20
  },
  addButtonBottomLast: {
    bottom: 0
  }
});

class GridComponent extends React.Component {
  state = { isHovered: false };
  onMouseEnter = () => this.setState({ isHovered: true });
  onMouseLeave = () => this.setState({ isHovered: false });
  getAddButtonPositionClass = () => {
    const {
      isFirstChild,
      isLastChild,
      classes: { addButtonTop, addButtonBottom, addButtonBottomLast }
    } = this.props;
    if (isFirstChild && !isLastChild) {
      return addButtonTop;
    }
    if (isLastChild) {
      return addButtonBottomLast;
    }
    return addButtonBottom;
  };
  render() {
    const {
      children,
      mode,
      classes: { addButton, dashedBorder },
      ...props
    } = this.props;
    const { isHovered } = this.state;
    return (
      <View
        {...props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={classNames(isHovered && dashedBorder)}
      >
        {children}
        {mode === "edditing" && (
          <Fade in={isHovered}>
            <Button
              variant="fab"
              color="primary"
              mini
              aria-label="Add"
              className={classNames(
                addButton,
                this.getAddButtonPositionClass()
              )}
            >
              <AddIcon />
            </Button>
          </Fade>
        )}
      </View>
    );
  }
}

export default withStyles(styles)(GridComponent);
