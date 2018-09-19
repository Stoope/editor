import React from "react";
import { withStyles, withTheme } from "@material-ui/core/styles";
import preview from "./preview.png";
import image from "./image.png";

const styles = () => ({
  root: {
    transition: `0.2s all`,
    width: "100%",
    height: "100%"
  }
});

const ViewComponent = ({
  classes: { root },
  href,
  target,
  src,
  borderRadius,
  ...rest
}) => (
  <a
    href={href || undefined}
    target={target || undefined}
    style={{
      ...rest
    }}
  >
    <img
      style={{
        borderRadius
      }}
      src={src || image}
      className={root}
    />
  </a>
);

export default {
  Component: withStyles(styles)(withTheme()(ViewComponent)),
  id: "ImagePlugin",
  name: "Изображение",
  description: "Изображение с изменяемым внешнем видом",
  defaultState: {
    type: "ImagePlugin",
    borderRadius: 0,
    width: "auto",
    height: "auto",
    src: null,
    href: "",
    target: "_blank"
  },
  preview
};
