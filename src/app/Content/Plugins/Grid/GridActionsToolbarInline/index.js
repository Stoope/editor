import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import RemoveRedEyeOutlined from "@material-ui/icons/RemoveRedEyeOutlined";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import FileCopy from "@material-ui/icons/FileCopy";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Settings from "@material-ui/icons/Settings";
import Zoom from "@material-ui/core/Zoom";
import classnames from "classnames";
import SettingsSidebar from "@/app/SettingsSidebar";
import TextField from "@material-ui/core/TextField";
import ColorPicker from "@/app/SettingsHelpers/ColorPicker";
import MenuItem from "@material-ui/core/MenuItem";
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
      componentProps: { color, alignItems, justify, xs }
    } = this.props;
    const { isSettingsOpen } = this.state;
    return (
      <Fragment>
        <SettingsSidebar
          title="Настройки блока"
          isOpen={isSettingsOpen}
          onClose={this.closeSidebar}
        >
          <ColorPicker
            onChange={color => this.changeItem({ color })}
            color={color}
          />
          <TextField
            select
            fullWidth
            label="Ширина блока"
            value={xs}
            onChange={event => this.changeItem({ xs: event.target.value })}
          >
            {[
              { value: 1, label: "1 колонка" },
              { value: 2, label: "2 колонки" },
              { value: 3, label: "3 колонки" },
              { value: 4, label: "4 колонки" },
              { value: 5, label: "5 колонок" },
              { value: 6, label: "6 колонок" },
              { value: 7, label: "7 колонок" },
              { value: 8, label: "8 колонок" },
              { value: 9, label: "9 колонок" },
              { value: 10, label: "10 колонок" },
              { value: 11, label: "11 колонок" },
              { value: 12, label: "12 колонок" }
            ].map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Выравнивание по вертикали"
            value={alignItems}
            onChange={event =>
              this.changeItem({ alignItems: event.target.value })
            }
          >
            {[
              { value: "flex-start", label: "С начала" },
              { value: "center", label: "В центре" },
              { value: "flex-end", label: "С конца" },
              { value: "stretch", label: "Растянуть" },
              { value: "baseline", label: "По базовой линии" }
            ].map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Выравнивание по горизонтали"
            value={justify}
            onChange={event => this.changeItem({ justify: event.target.value })}
          >
            {[
              { value: "flex-start", label: "С начала" },
              { value: "center", label: "В центре" },
              { value: "flex-end", label: "С конца" },
              {
                value: "space-between",
                label: "Первый элемент вначале, последний в конце"
              },
              {
                value: "space-around",
                label: "Все элементы имеют полуразмерное пространство"
              },
              {
                value: "space-evenly",
                label: "Все элементы имеют равное пространство вокруг"
              }
            ].map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </SettingsSidebar>
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
                  <ArrowUpward className={iconSmall} />
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
                  <ArrowDownward className={iconSmall} />
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
