import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import View from "./View";
import GridActionsToolbar from "./GridActionsToolbar";
import AddButton from "./AddButton";

const styles = () => ({
  dashedBorder: {
    outline: "2px dashed rgba(204, 204, 204, 1)"
  }
});

class GridComponent extends React.Component {
  state = { isHovered: false };
  onMouseEnter = () => this.setState({ isHovered: true });
  onMouseLeave = () => this.setState({ isHovered: false });
  getAddButtonPositionClass = () => {
    const {
      isLastChild,
      classes: { addButtonBottom, addButtonBottomLast }
    } = this.props;
    if (isLastChild) {
      return addButtonBottomLast;
    }
    return addButtonBottom;
  };
  render() {
    const {
      isFirstChild,
      isLastChild,
      children,
      removeItem,
      mode,
      classes: { dashedBorder },
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
          <Fragment>
            <GridActionsToolbar
              id={props.id}
              removeItem={removeItem}
              display={isHovered}
            />
            <AddButton display={isHovered} />
          </Fragment>
        )}
      </View>
    );
  }
}

export default withStyles(styles)(GridComponent);
