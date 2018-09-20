import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SizeField from "@/app/SettingsHelpers/SizeField";
import { withStyles } from "@material-ui/core/styles";
import throttle from "lodash/throttle";
import View from "./View";

const styles = () => ({
  borderOnHover: {
    transition: "all 0.2s ease-out",
    border: "2px dashed rgba(204, 204, 204, 0)",
    margin: -2,
    "&:hover": {
      border: "2px solid rgba(204, 204, 204, 1)"
    }
  }
});
const Settings = ({ changeItem, state: { width, height } }) => (
  <Fragment>
    <Grid item xs={12}>
      <Typography variant="title">Настройки текста</Typography>
    </Grid>
    <Grid item xs={12}>
      <SizeField
        autoEnabled
        label="Ширина"
        value={width}
        onChange={width => changeItem({ width })}
      />
    </Grid>
    <Grid item xs={12}>
      <SizeField
        autoEnabled
        label="Высота"
        value={height}
        onChange={height => changeItem({ height })}
      />
    </Grid>
  </Fragment>
);

class EditorPlugin extends React.Component {
  changeItem = throttle(value => {
    const {
      changeItem,
      componentProps: { id }
    } = this.props;
    changeItem && changeItem({ id, value });
  }, 500);
  render() {
    const {
      classes: { borderOnHover },
      componentProps
    } = this.props;
    return (
      <View.Component
        {...componentProps}
        onChange={this.changeItem}
        className={borderOnHover}
      />
    );
  }
}

export default {
  ...View,
  Component: withStyles(styles)(EditorPlugin),
  Settings
};
