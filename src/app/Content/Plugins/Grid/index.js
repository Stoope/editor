import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import View from "./View";
import GridActionsToolbar from "./GridActionsToolbar";
import AddButton from "./AddButton";
import AddButtonInline from "./AddButtonInline";

const styles = () => ({
  gridBlock: {
    "&:hover $controls": {
      visibility: "visible",
      opacity: 1
    }
  },
  gridSection: {
    "&:hover $controlsSection": {
      visibility: "visible",
      opacity: 1
    }
  },
  grid: {
    overflow: "hidden",
    transition: "all 0.2s ease-out",
    border: "0px dashed rgba(204, 204, 204, 0)",
    display: "flex",
    "&:hover": {
      border: "2px dashed rgba(204, 204, 204, 1)"
    }
  },
  hiddenBlock: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  controls: {
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s, opacity 0.2s linear"
  },
  controlsSection: {
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s, opacity 0.2s linear"
  }
});

class GridComponent extends React.Component {
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
      classes: {
        gridSection,
        gridBlock,
        hiddenBlock,
        grid,
        controls,
        controlsSection
      },
      ...props
    } = this.props;
    const isItemHidden = Boolean(componentProps.hidden);

    return (
      <View.Component
        {...componentProps}
        className={classNames(grid, section ? gridSection : gridBlock)}
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
              isLastChild={isLastChild}
              resizeItems={resizeItems}
              innerSettings={innerSettings}
              componentProps={componentProps}
              className={section ? controlsSection : controls}
              isSection
              {...props}
            />
            <AddButton
              className={section ? controlsSection : controls}
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
              className={section ? controlsSection : controls}
              isLastChild={isLastChild}
              resizeItems={resizeItems}
              innerSettings={innerSettings}
              componentProps={componentProps}
              isSection={false}
              {...props}
            />
            <AddButtonInline
              className={section ? controlsSection : controls}
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
