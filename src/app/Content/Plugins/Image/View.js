import React from "react";
import { withStyles } from "@material-ui/core/styles";
import preview from "./preview.png";
import image from "./image.svg";

const styles = () => ({
  root: {
    transition: `0.2s all`,
    width: "100%",
    height: "100%"
  },
  emptyImage: {
    transition: `0.2s all`,
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

const ViewComponent = ({
  classes: { root, emptyImage },
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
      className={src ? root : emptyImage}
    />
  </a>
);

export default {
  Component: withStyles(styles)(ViewComponent),
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
