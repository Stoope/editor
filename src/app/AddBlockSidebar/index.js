import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import PluginCard from "./PluginCard";
import * as Plugins from "../Content/Plugins";

const styles = () => ({
  root: {
    padding: 16
  }
});

class AddBlockSidebar extends React.Component {
  onClose = () => {
    const { closeAddBlockSidebar } = this.props;
    closeAddBlockSidebar();
  };
  render() {
    const {
      addBlock: { isOpen, currentId },
      addItemAfter,
      classes: { root }
    } = this.props;
    return (
      <Drawer anchor="top" open={isOpen} onClose={this.onClose}>
        <Grid container className={root}>
          <Grid item xs={12}>
            <Typography variant="title" gutterBottom>
              Добавить блок
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={16}>
            {Object.values(Plugins)
              .filter(item => item.id !== "Grid")
              .map(item => (
                <Grid key={item.id} item xs={2}>
                  <PluginCard
                    addItemAfter={addItemAfter}
                    currentId={currentId}
                    item={item}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Drawer>
    );
  }
}

export default withStyles(styles)(AddBlockSidebar);
