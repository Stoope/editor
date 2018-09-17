import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

const styles = () => ({
  textField: {
    flex: 1,
    marginRight: 10
  },
  root: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: 5
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
      classes: { root, textField }
    } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={root}>
        <TextField
          label={label}
          className={textField}
          value={color}
          onChange={this.handleChange}
        />
        <Button variant="raised" onClick={this.handleClick}>
          Выбрать ...
        </Button>
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
      </div>
    );
  }
}

export default withStyles(styles)(ColorPicker);
