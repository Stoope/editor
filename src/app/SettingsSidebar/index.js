import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";

const styles = () => ({
  root: {
    padding: 16,
    maxWidth: 400
  }
});

const SettingsSidebar = ({ isOpen, onClose, classes: { root }, children }) => (
  <Drawer
    ModalProps={{ BackdropProps: { invisible: true } }}
    keepMounted={false}
    open={isOpen}
    onClose={onClose}
  >
    <Grid container className={root}>
      {children}
    </Grid>
  </Drawer>
);

export default withStyles(styles)(SettingsSidebar);
