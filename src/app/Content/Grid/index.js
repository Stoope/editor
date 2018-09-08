import React, { Fragment } from "react";
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
    alignSelf: "stretch",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
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
      mode,
      removeItem,
      copyItem,
      changeItem,
      classes: { dashedBorder, hiddenBlock, grid, dashedBorderHidden },
      ...props
    } = this.props;
    const { isHovered } = this.state;
    const isItemHidden = Boolean(props.hidden);
    return (
      <View
        {...props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={classNames(
          grid,
          isHovered ? dashedBorder : dashedBorderHidden
        )}
      >
        {isItemHidden ? (
          <Typography className={hiddenBlock} align="center" variant="title">
            Блок скрыт
          </Typography>
        ) : (
          children
        )}
        {mode === "edditing" && (
          <Fragment>
            <GridActionsToolbar
              id={props.id}
              removeItem={removeItem}
              isItemHidden={isItemHidden}
              changeItem={changeItem}
              copyItem={copyItem}
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
