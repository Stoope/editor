import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import View from "./View";
import GridActionsToolbar from "./GridActionsToolbar";
import AddButton from "./AddButton";
import AddButtonInline from "./AddButtonInline";

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
      componentProps: { section, ...componentProps },
      openAddBlockSidebar,
      resizeItems,
      innerSettings,
      classes: { dashedBorder, hiddenBlock, grid, dashedBorderHidden },
      ...props
    } = this.props;
    const { isHovered } = this.state;
    const isItemHidden = Boolean(componentProps.hidden);

    return (
      <View.Component
        {...componentProps}
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
        {section ? (
          <Fragment>
            <GridActionsToolbar
              id={componentProps.id}
              isItemHidden={isItemHidden}
              display={isHovered}
              isLastChild={isLastChild}
              resizeItems={resizeItems}
              innerSettings={innerSettings}
              componentProps={componentProps}
              isSection
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
            <GridActionsToolbar
              id={componentProps.id}
              isItemHidden={isItemHidden}
              display={isHovered}
              isLastChild={isLastChild}
              resizeItems={resizeItems}
              innerSettings={innerSettings}
              componentProps={componentProps}
              isSection={false}
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
