import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";

const styles = () => ({
  root: {
    padding: 16
  }
});

const SettingsSidebar = ({
  title,
  isOpen,
  onClose,
  classes: { root },
  children
}) => (
  <Drawer
    ModalProps={{ BackdropProps: { invisible: true } }}
    keepMounted={false}
    open={isOpen}
    onClose={onClose}
  >
    <Grid container className={root}>
      <Grid item xs={12}>
        <Typography variant="title" gutterBottom>
          {title}
        </Typography>
      </Grid>
      {React.Children.map(children, child => (
        <Grid item xs={12}>
          {child}
        </Grid>
      ))}
    </Grid>
  </Drawer>
);

export default withStyles(styles)(SettingsSidebar);
