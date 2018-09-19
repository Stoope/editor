import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@/app/SettingsHelpers/TextField";
import { ChromePicker } from "react-color";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";

const styles = () => ({
  marginRight: {
    marginRight: 4
  }
});

class ColorPicker extends React.Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };
  handleChange = event => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };
  handleChangeChromePicker = color => {
    const { onChange } = this.props;
    onChange(color.hex);
  };

  render() {
    const {
      color = "",
      label = "Цвет фона",
      classes: { marginRight }
    } = this.props;
    const { anchorEl } = this.state;

    return (
      <Grid container alignItems="flex-end" item xs={12}>
        <Grid className={marginRight} item xs>
          <TextField label={label} value={color} onChange={this.handleChange} />
        </Grid>
        <Grid item xs="auto">
          <Button variant="raised" onClick={this.handleClick}>
            Выбрать ...
          </Button>
        </Grid>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <ChromePicker
            color={color}
            onChange={this.handleChangeChromePicker}
          />
        </Popover>
      </Grid>
    );
  }
}

export default withStyles(styles)(ColorPicker);
