import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import preview from "./preview.jpg";

const styles = () => ({
  root: {
    flexGrow: 1,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
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
  id: "TestPlugin",
  name: "Тестовый плагин",
  description: "Тестовый плагин для теста",
  defaultState: {
    type: "TestPlugin",
    height: 800,
    uri: `https://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_1500.jpg`
  },
  preview
};
