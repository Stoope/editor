import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@/app/SettingsHelpers/TextField";
import SizeField from "@/app/SettingsHelpers/SizeField";
import FileUpload from "@/app/SettingsHelpers/FileUpload";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import View from "./View";

const Settings = ({
  changeItem,
  state: { borderRadius, href, target, width, height, src }
}) => (
  <Fragment>
    <Grid item xs={12}>
      <Typography variant="title">Настройки изображения</Typography>
    </Grid>
    <Grid item xs={12}>
      <FileUpload
        label="Url изображения"
        value={src}
        onChange={src => changeItem({ src })}
      />
    </Grid>
    <Grid item xs={12}>
      <SizeField
        label="Скругление"
        value={borderRadius}
        onChange={borderRadius => changeItem({ borderRadius })}
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
    <Grid item xs={12}>
      <TextField
        label="Ссылка перехода при клике"
        placeholder="https://example.com"
        value={href}
        onChange={href => changeItem({ href })}
      />
    </Grid>
    <Grid item xs={12}>
      <FormControlLabel
        control={
          <Checkbox
            checked={target === "_blank"}
            onChange={event =>
              changeItem({ target: event.target.checked ? "_blank" : "" })
            }
            value="target"
          />
        }
        label="Открывать в новом окне"
      />
    </Grid>
  </Fragment>
);

const ImagePlugin = ({ componentProps }) => (
  <View.Component {...componentProps} />
);

export default {
  ...View,
  Component: ImagePlugin,
  Settings
};
