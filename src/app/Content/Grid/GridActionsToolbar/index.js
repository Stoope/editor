import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import RemoveRedEyeOutlined from "@material-ui/icons/RemoveRedEyeOutlined";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import FileCopy from "@material-ui/icons/FileCopy";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Zoom from "@material-ui/core/Zoom";
import classnames from "classnames";
import Tooltip from "../Tooltip";

const styles = () => ({
  root: {
    position: "absolute",
    right: 15,
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

class GridActionsToolbar extends React.Component {
  removeItem = () => {
    const { removeItem, id } = this.props;
    if (removeItem != null) {
      removeItem(id);
    }
  };
  copyItem = () => {
    const { copyItem, id } = this.props;
    if (copyItem != null) {
      copyItem(id);
    }
  };
  hideItem = () => {
    const { changeItem, id } = this.props;
    if (changeItem != null) {
      changeItem({ id, hidden: true });
    }
  };
  showItem = () => {
    const { changeItem, id } = this.props;
    if (changeItem != null) {
      changeItem({ id, hidden: false });
    }
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
      isLastChild
    } = this.props;
    return (
      <Zoom unmountOnExit in={display}>
        <div className={root}>
          <Tooltip title="Копировать блок">
            <Button
              onClick={this.copyItem}
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
          <Tooltip title="Удалить блок">
            <Button
              onClick={this.removeItem}
              size="small"
              variant="contained"
              className={classnames(actionButton, actionButtonMiddle)}
            >
              <Delete className={iconSmall} />
            </Button>
          </Tooltip>
          <Tooltip title={isItemHidden ? "Показать блок" : "Скрыть блок"}>
            <Button
              onClick={isItemHidden ? this.showItem : this.hideItem}
              size="small"
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
                onClick={this.copyItem}
                size="small"
                variant="contained"
                className={classnames(
                  actionButton,
                  marginLeft,
                  !isLastChild ? actionButtonFirst : marginRight
                )}
              >
                <ArrowUpward className={iconSmall} />
              </Button>
            </Tooltip>
          )}
          {!isLastChild && (
            <Tooltip title="Переместить блок вниз">
              <Button
                onClick={this.copyItem}
                size="small"
                variant="contained"
                className={classnames(
                  actionButton,
                  marginRight,
                  !isFirstChild ? actionButtonLast : marginLeft
                )}
              >
                <ArrowDownward className={iconSmall} />
              </Button>
            </Tooltip>
          )}
        </div>
      </Zoom>
    );
  }
}

export default withStyles(styles)(GridActionsToolbar);
