import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@/app/SettingsHelpers/TextField";
import CloudUpload from "@material-ui/icons/CloudUpload";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import classNames from "classnames";

const styles = () => ({
  marginRight: {
    marginRight: 4
  },
  successButton: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  errorButton: {
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700]
    }
  },
  successIcon: {
    color: "white"
  },
  hidden: { display: "none" },
  progress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

class FileUpload extends React.Component {
  state = {
    loading: false,
    success: false,
    error: false
  };
  handleUpload = event => {
    const file = event.target.files[0];
    this.setState({ loading: true }, () => {
      const body = new FormData();
      body.append("file", file);
      fetch("http://cbsmba.betadev.org/api/v1/upload/file", {
        method: "POST",
        body
      })
        .then(response => {
          if (!response.ok) {
            console.dir(response);
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(value => {
          this.setState({ loading: false, success: true, error: false }, () =>
            this.handleChange((value && value.url) || "")
          );
        })
        .catch(error => {
          this.setState({ loading: false, success: false, error: true });
          console.log(error);
        });
    });
  };

  handleChange = src => {
    const { onChange } = this.props;
    onChange(src);
  };

  render() {
    const {
      value,
      label,
      classes: {
        marginRight,
        hidden,
        progress,
        successButton,
        successIcon,
        errorButton
      }
    } = this.props;
    const { loading, success, error } = this.state;

    return (
      <Grid container alignItems="flex-end" item xs={12}>
        <Grid className={marginRight} item xs>
          <TextField
            placeholder="https://example.com"
            label={label}
            value={value}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs="auto">
          <label htmlFor="flat-button-file">
            <input
              accept="image/*"
              className={hidden}
              id="flat-button-file"
              type="file"
              disabled={loading}
              onChange={this.handleUpload}
            />
            <Button
              component="span"
              variant="raised"
              className={classNames(
                success ? successButton : error ? errorButton : null
              )}
              disabled={loading}
            >
              <CloudUpload
                className={classNames((success || error) && successIcon)}
              />
              {loading && <CircularProgress size={24} className={progress} />}
            </Button>
          </label>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FileUpload);
