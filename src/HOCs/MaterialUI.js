import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3a7ad9",
      light: "rgb(97, 148, 224)",
      dark: "rgb(40, 85, 151)",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ff9100",
      light: "rgb(255, 167, 51)",
      dark: "rgb(178, 101, 0)",
      contrastText: "rgba(0, 0, 0, 0.87)"
    }
  }
});

const MaterialUI = WrappedComponent => {
  const Component = props => (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <WrappedComponent {...props} />
      </CssBaseline>
    </MuiThemeProvider>
  );
  return Component;
};

export default MaterialUI;
