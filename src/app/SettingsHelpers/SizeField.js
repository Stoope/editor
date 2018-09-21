import React from "react";
import TextField from "@/app/SettingsHelpers/TextField";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const styles = () => ({
  marginRight: {
    marginRight: 4
  },
  marginLeft: {
    marginLeft: 4
  }
});

class SizeField extends React.Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    const numberValue = parseInt(value, 10) || 0;
    const type =
      (value || "").toString().replace(numberValue.toString(), "") || "px";
    this.state = {
      value: numberValue,
      type: type === "auto" ? "px" : type,
      auto: value === "auto"
    };
  }
  handleValueChange = value => {
    this.setState({ value }, this.handleChange);
  };
  handleTypeChange = event => {
    this.setState({ type: event.target.value }, this.handleChange);
  };
  handleAutoChange = event => {
    this.setState({ auto: event.target.checked }, this.handleChange);
  };
  handleChange = () => {
    const { onChange } = this.props;
    const { type, value, auto } = this.state;
    if (auto) {
      onChange("auto");
    } else {
      onChange(`${value}${type}`);
    }
  };

  render() {
    const {
      label,
      autoEnabled,
      classes: { marginRight, marginLeft }
    } = this.props;
    const { type, value, auto } = this.state;

    return (
      <Grid container item xs={12}>
        <Grid container alignItems="flex-end" item xs={12}>
          <Grid className={marginRight} item xs>
            <TextField
              disabled={autoEnabled && auto}
              type="number"
              label={label}
              value={value}
              onChange={this.handleValueChange}
            />
          </Grid>
          <Grid item xs="auto">
            <Select
              disabled={autoEnabled && auto}
              fullWidth
              label="Скругление"
              value={type}
              onChange={this.handleTypeChange}
            >
              {[{ value: "px", label: "px" }, { value: "%", label: "%" }].map(
                option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                )
              )}
            </Select>
          </Grid>
          {autoEnabled && (
            <Grid className={marginLeft} item xs="auto">
              <FormControlLabel
                control={
                  <Switch
                    checked={auto}
                    onChange={this.handleAutoChange}
                    value="auto"
                  />
                }
                label="Auto"
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SizeField);
