import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import RemoveRedEyeOutlined from "@material-ui/icons/RemoveRedEyeOutlined";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import FileCopy from "@material-ui/icons/FileCopy";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";

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
    borderRadius: 0,
    minWidth: 44
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
      classes: { root, actionButton, iconSmall },
      display,
      isItemHidden
    } = this.props;
    return (
      <Zoom in={display}>
        <div className={root}>
          <Tooltip enterDelay={300} title="Копировать блок">
            <Button
              onClick={this.copyItem}
              size="small"
              variant="contained"
              className={actionButton}
            >
              <FileCopy className={iconSmall} />
            </Button>
          </Tooltip>
          <Tooltip enterDelay={300} title="Удалить блок">
            <Button
              onClick={this.removeItem}
              size="small"
              variant="contained"
              className={actionButton}
            >
              <Delete className={iconSmall} />
            </Button>
          </Tooltip>
          <Tooltip
            enterDelay={300}
            title={isItemHidden ? "Показать блок" : "Скрыть блок"}
          >
            <Button
              onClick={isItemHidden ? this.showItem : this.hideItem}
              size="small"
              variant="contained"
              className={actionButton}
            >
              {isItemHidden ? (
                <RemoveRedEyeOutlined className={iconSmall} />
              ) : (
                <RemoveRedEye className={iconSmall} />
              )}
            </Button>
          </Tooltip>
        </div>
      </Zoom>
    );
  }
}

export default withStyles(styles)(GridActionsToolbar);
