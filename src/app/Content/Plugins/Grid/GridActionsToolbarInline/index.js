import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import RemoveRedEyeOutlined from "@material-ui/icons/RemoveRedEyeOutlined";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import FileCopy from "@material-ui/icons/FileCopy";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Settings from "@material-ui/icons/Settings";
import Zoom from "@material-ui/core/Zoom";
import classnames from "classnames";
import GridSettings from "../GridSettings";
import Tooltip from "../Tooltip";

const styles = () => ({
  root: {
    position: "absolute",
    left: 15,
    top: 15,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  iconSmall: {
    fontSize: 20
  },
  actionButton: {
    minWidth: 44
  },
  actionButtonLast: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  actionButtonFirst: {
    marginLeft: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  actionButtonMiddle: {
    borderRadius: 0
  },
  marginRight: {
    marginRight: 8
  },
  marginLeft: {
    marginLeft: 8
  }
});

class GridActionsToolbarInline extends React.Component {
  state = { isSettingsOpen: false };
  closeSidebar = () => {
    this.setState({ isSettingsOpen: false });
  };
  openSidebar = () => {
    this.setState({ isSettingsOpen: true });
  };
  removeItem = () => {
    const { removeItem, id } = this.props;
    removeItem && removeItem(id);
  };
  copyItem = () => {
    const { copyItem, id, resizeItems } = this.props;
    copyItem && copyItem(id);
    resizeItems && resizeItems(id);
  };
  changeItem = props => {
    const { changeItem, id } = this.props;
    changeItem && changeItem({ id, ...props });
  };
  moveItemUp = () => {
    const { moveItemUp, id } = this.props;
    moveItemUp && moveItemUp(id);
  };
  moveItemDown = () => {
    const { moveItemDown, id } = this.props;
    moveItemDown && moveItemDown(id);
  };
  render() {
    const {
      classes: {
        root,
        actionButton,
        iconSmall,
        actionButtonFirst,
        actionButtonMiddle,
        actionButtonLast,
        marginRight,
        marginLeft
      },
      display,
      isItemHidden,
      isFirstChild,
      isLastChild,
      componentProps
    } = this.props;
    const { isSettingsOpen } = this.state;
    return (
      <Fragment>
        <GridSettings
          componentProps={componentProps}
          isSettingsOpen={isSettingsOpen}
          changeItem={this.changeItem}
          closeSidebar={this.closeSidebar}
        />
        <Zoom unmountOnExit in={display}>
          <div className={root}>
            <Tooltip title="Копировать блок">
              <Button
                onClick={this.copyItem}
                color="secondary"
                size="small"
                variant="contained"
                className={classnames(
                  actionButton,
                  actionButtonFirst,
                  marginLeft
                )}
              >
                <FileCopy className={iconSmall} />
              </Button>
            </Tooltip>
            <Tooltip title="Настроить блок">
              <Button
                onClick={this.openSidebar}
                color="secondary"
                size="small"
                variant="contained"
                className={classnames(actionButton, actionButtonMiddle)}
              >
                <Settings className={iconSmall} />
              </Button>
            </Tooltip>
            <Tooltip title="Удалить блок">
              <Button
                onClick={this.removeItem}
                color="secondary"
                size="small"
                variant="contained"
                className={classnames(actionButton, actionButtonMiddle)}
              >
                <Delete className={iconSmall} />
              </Button>
            </Tooltip>
            <Tooltip title={isItemHidden ? "Показать блок" : "Скрыть блок"}>
              <Button
                onClick={() =>
                  isItemHidden
                    ? this.changeItem({ hidden: false })
                    : this.changeItem({ hidden: true })
                }
                size="small"
                color="secondary"
                variant="contained"
                className={classnames(
                  actionButton,
                  actionButtonLast,
                  marginRight
                )}
              >
                {isItemHidden ? (
                  <RemoveRedEyeOutlined className={iconSmall} />
                ) : (
                  <RemoveRedEye className={iconSmall} />
                )}
              </Button>
            </Tooltip>
            {!isFirstChild && (
              <Tooltip title="Переместить блок вверх">
                <Button
                  color="secondary"
                  onClick={this.moveItemUp}
                  size="small"
                  variant="contained"
                  className={classnames(
                    actionButton,
                    marginLeft,
                    !isLastChild ? actionButtonFirst : marginRight
                  )}
                >
                  <ArrowBack className={iconSmall} />
                </Button>
              </Tooltip>
            )}
            {!isLastChild && (
              <Tooltip title="Переместить блок вниз">
                <Button
                  color="secondary"
                  onClick={this.moveItemDown}
                  size="small"
                  variant="contained"
                  className={classnames(
                    actionButton,
                    marginRight,
                    !isFirstChild ? actionButtonLast : marginLeft
                  )}
                >
                  <ArrowForward className={iconSmall} />
                </Button>
              </Tooltip>
            )}
          </div>
        </Zoom>
      </Fragment>
    );
  }
}

export default withStyles(styles)(GridActionsToolbarInline);
