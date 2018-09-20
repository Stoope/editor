import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Delete from "@material-ui/icons/Delete";
import RemoveRedEyeOutlined from "@material-ui/icons/RemoveRedEyeOutlined";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import FileCopy from "@material-ui/icons/FileCopy";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Settings from "@material-ui/icons/Settings";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
import GridSettings from "../GridSettings";

const styles = () => ({
  root: {
    position: "absolute",
    width: "auto",
    maxWidth: "calc(100% - 30px)"
  },
  rootSection: {
    top: 15,
    right: 15
  },
  rootBlock: {
    top: 55,
    left: 15
  },
  iconSmall: {
    fontSize: 20
  },
  actionButton: {
    minWidth: 44,
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
    const { copyItem, id, resizeItems, isSection } = this.props;
    copyItem && copyItem(id);
    isSection && resizeItems && resizeItems(id);
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
      classes: { root, actionButton, iconSmall, rootSection, rootBlock },
      className,
      innerSettings,
      isItemHidden,
      isFirstChild,
      isLastChild,
      componentProps,
      isSection
    } = this.props;
    const { isSettingsOpen } = this.state;
    const buttonColor = isSection ? "default" : "secondary";
    return (
      <Fragment>
        <GridSettings
          componentProps={componentProps}
          isSettingsOpen={isSettingsOpen}
          innerSettings={innerSettings}
          changeItem={this.changeItem}
          closeSidebar={this.closeSidebar}
          isSection={isSection}
        />
        <Grid
          spacing={8}
          container
          className={classnames(
            root,
            className,
            isSection ? rootSection : rootBlock
          )}
        >
          <Grid item xs="auto">
            <Grid item container>
              <Grid item xs="auto">
                <Tooltip title="Копировать блок">
                  <Button
                    onClick={this.copyItem}
                    color={buttonColor}
                    size="small"
                    variant="contained"
                    className={actionButton}
                  >
                    <FileCopy className={iconSmall} />
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Настроить блок">
                  <Button
                    onClick={this.openSidebar}
                    color={buttonColor}
                    size="small"
                    variant="contained"
                    className={actionButton}
                  >
                    <Settings className={iconSmall} />
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Удалить блок">
                  <Button
                    onClick={this.removeItem}
                    color={buttonColor}
                    size="small"
                    variant="contained"
                    className={actionButton}
                  >
                    <Delete className={iconSmall} />
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title={isItemHidden ? "Показать блок" : "Скрыть блок"}>
                  <Button
                    onClick={() =>
                      isItemHidden
                        ? this.changeItem({ hidden: false })
                        : this.changeItem({ hidden: true })
                    }
                    size="small"
                    color={buttonColor}
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="auto">
            <Grid item container>
              {!isFirstChild && (
                <Grid item xs="auto">
                  <Tooltip title="Переместить блок вверх">
                    <Button
                      color={buttonColor}
                      onClick={this.moveItemUp}
                      size="small"
                      variant="contained"
                      className={actionButton}
                    >
                      {isSection ? (
                        <ArrowUpward className={iconSmall} />
                      ) : (
                        <ArrowBack className={iconSmall} />
                      )}
                    </Button>
                  </Tooltip>
                </Grid>
              )}
              {!isLastChild && (
                <Grid item xs="auto">
                  <Tooltip title="Переместить блок вниз">
                    <Button
                      color={buttonColor}
                      onClick={this.moveItemDown}
                      size="small"
                      variant="contained"
                      className={actionButton}
                    >
                      {isSection ? (
                        <ArrowDownward className={iconSmall} />
                      ) : (
                        <ArrowForward className={iconSmall} />
                      )}
                    </Button>
                  </Tooltip>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(GridActionsToolbar);
