import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import ReactHoverObserver from "react-hover-observer";
import View from "./View";
import GridActionsToolbar from "./GridActionsToolbar";
import AddButton from "./AddButton";
import AddButtonInline from "./AddButtonInline";
import GridActionsToolbarInline from "./GridActionsToolbarInline";

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
  onHoverChanged = ({ isHovering }) => this.setState({ isHovered: isHovering });
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
      isLastChild,
      children,
      componentProps,
      openAddBlockSidebar,
      resizeItems,
      classes: { dashedBorder, hiddenBlock, grid, dashedBorderHidden },
      ...props
    } = this.props;
    const { isHovered } = this.state;
    const isItemHidden = Boolean(componentProps.hidden);

    return (
      <View.Component
        {...componentProps}
        onHoverChanged={this.onHoverChanged}
        component={ReactHoverObserver}
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
        {componentProps.section ? (
          <Fragment>
            <GridActionsToolbar
              id={componentProps.id}
              isItemHidden={isItemHidden}
              display={isHovered}
              isLastChild={isLastChild}
              componentProps={componentProps}
              {...props}
            />
            <AddButton
              display={isHovered}
              openAddBlockSidebar={openAddBlockSidebar}
              id={componentProps.id}
              componentProps={componentProps}
            />
          </Fragment>
        ) : (
          <Fragment>
            <GridActionsToolbarInline
              id={componentProps.id}
              isItemHidden={isItemHidden}
              display={isHovered}
              isLastChild={isLastChild}
              resizeItems={resizeItems}
              componentProps={componentProps}
              {...props}
            />
            <AddButtonInline
              display={isHovered}
              openAddBlockSidebar={openAddBlockSidebar}
              id={componentProps.id}
              componentProps={componentProps}
            />
          </Fragment>
        )}
      </View.Component>
    );
  }
}

export default {
  ...View,
  Component: withStyles(styles)(GridComponent)
};
