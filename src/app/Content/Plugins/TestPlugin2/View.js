import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import preview from "./preview.gif";

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

const GridComponent = ({ classes: { root }, uri, height }) => (
  <div
    className={classNames(root)}
    style={{ backgroundImage: `url(${uri})`, height }}
  />
);

export default {
  Component: withStyles(styles)(GridComponent),
  id: "TestPlugin2",
  name: "Тестовый плагин 2",
  description: "Тестовый плагин для теста номер 2",
  defaultState: {
    type: "Grid",
    content: [
      {
        type: "TestPlugin2",
        height: 500
      }
    ]
  },
  preview
};
