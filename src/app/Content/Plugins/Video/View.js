import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import preview from "./preview.png";
import image from "./image.svg";

const styles = () => ({
  emptyImage: {
    transition: `0.2s all`,
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

const ViewComponent = ({
  classes: { emptyImage },
  src,
  height,
  width,
  ...rest
}) =>
  src ? (
    <ReactPlayer
      url={src}
      height={height}
      width={width}
      style={{
        ...rest
      }}
    />
  ) : (
    <img className={emptyImage} src={image} />
  );

export default {
  Component: withStyles(styles)(ViewComponent),
  id: "VideoPlugin",
  name: "Видео",
  description: "Видео с изменяемым внешнем видом",
  defaultState: {
    type: "VideoPlugin",
    width: "auto",
    height: "auto",
    url: null
  },
  preview
};
