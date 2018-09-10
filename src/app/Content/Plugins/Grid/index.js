import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import View from "./View";
import GridActionsToolbar from "./GridActionsToolbar";
import AddButton from "./AddButton";

const styles = () => ({
  dashedBorder: {
    border: "2px dashed rgba(204, 204, 204, 1)"
  },
  dashedBorderHidden: {
    border: "2px dashed rgba(204, 204, 204, 0)"
  },
  grid: {
    transition: "all 0.2s ease-out"
  },
  hiddenBlock: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
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
      copyItem,
      changeItem,
      moveItemUp,
      moveItemDown,
      hidden,
      openAddBlockSidebar,
      classes: { dashedBorder, hiddenBlock, grid, dashedBorderHidden },
      ...props
    } = this.props;
    const { isHovered } = this.state;
    const isItemHidden = Boolean(hidden);
    return (
      <View.Component
        {...props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={classNames(
          grid,
          isHovered ? dashedBorder : dashedBorderHidden
        )}
      >
        {isItemHidden ? (
          <Typography className={hiddenBlock} variant="title">
            Блок скрыт
          </Typography>
        ) : (
          children
        )}
        <GridActionsToolbar
          id={props.id}
          removeItem={removeItem}
          isItemHidden={isItemHidden}
          changeItem={changeItem}
          copyItem={copyItem}
          display={isHovered}
          isFirstChild={isFirstChild}
          isLastChild={isLastChild}
          moveItemUp={moveItemUp}
          moveItemDown={moveItemDown}
        />
        <AddButton
          display={isHovered}
          openAddBlockSidebar={openAddBlockSidebar}
          id={props.id}
        />
      </View.Component>
    );
  }
}

export default {
  ...View,
  Component: withStyles(styles)(GridComponent)
};
