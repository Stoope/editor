import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SizeField from "@/app/SettingsHelpers/SizeField";
import TextField from "@/app/SettingsHelpers/TextField";
import View from "./View";

const Settings = ({ changeItem, state: { width, height, src } }) => (
  <Fragment>
    <Grid item xs={12}>
      <Typography variant="title">Настройки изображения</Typography>
    </Grid>
    <Grid item xs={12}>
      <TextField
        placeholder="https://example.com"
        label="Url видео(YouTube, Vimeo, ...)"
        value={src}
        onChange={src => changeItem({ src })}
      />
    </Grid>
    <Grid item xs={12}>
      <SizeField
        autoEnabled
        label="Ширина"
        value={width}
        onChange={width => changeItem({ width })}
      />
    </Grid>
    <Grid item xs={12}>
      <SizeField
        autoEnabled
        label="Высота"
        value={height}
        onChange={height => changeItem({ height })}
      />
    </Grid>
  </Fragment>
);

const VideoPlugin = ({ componentProps }) => (
  <View.Component {...componentProps} />
);

export default {
  ...View,
  Component: VideoPlugin,
  Settings
};
