import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

const theme = createMuiTheme();

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
