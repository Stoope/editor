import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import preview from "./preview.png";

const styles = () => ({
  root: {
    flexGrow: 1,
    backgroundColor: "red",
    animation: `TestPlugin2 2500ms infinite`
  },
  "@keyframes TestPlugin2": {
    "0%": {
      backgroundColor: "red"
    },
    "25%": {
      backgroundColor: "yellow"
    },
    "50%": {
      backgroundColor: "blue"
    },
    "100%": {
      backgroundColor: "green"
    }
  }
});

const ViewComponent = ({ type, variant, text, ...rest }) => (
  <Button
    variant={variant}
    size="large"
    // className={classNames(root)}
    style={rest}
  >
    {text}
  </Button>
);

export default {
  Component: withStyles(styles)(ViewComponent),
  id: "ButtonPlugin",
  name: "Кнопка",
  description: "Кнопка с выбором действия",
  defaultState: {
    type: "ButtonPlugin",
    text: "Кнопка",
    variant: "contained"
  },
  preview
};
