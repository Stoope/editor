import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@/app/SettingsHelpers/TextField";
import SizeField from "@/app/SettingsHelpers/SizeField";
import MenuItem from "@material-ui/core/MenuItem";
import ColorPicker from "@/app/SettingsHelpers/ColorPicker";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import View from "./View";

const Settings = ({
  changeItem,
  state: {
    text,
    borderRadius,
    backgroundColor,
    variant,
    href,
    target,
    disableRipple,
    fontSize
  }
}) => (
  <Fragment>
    <Grid item xs={12}>
      <Typography variant="title">Настройки кнопки</Typography>
    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Текст кнопки"
        value={text}
        onChange={text => changeItem({ text })}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        inputAdornmentContent="px"
        label="размер шрифта"
        type="number"
        value={fontSize}
        onChange={fontSize => changeItem({ fontSize })}
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
      <TextField
        select
        label="Тип кнопки"
        value={variant}
        onChange={variant => changeItem({ variant })}
      >
        {[
          { value: "flat", label: "Без рамки, без тени" },
          { value: "outlined", label: "Без тени" },
          { value: "contained", label: "Стандартная" }
        ].map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
    <Grid item xs={12}>
      <ColorPicker
        title="Цвет кнопки"
        onChange={backgroundColor => changeItem({ backgroundColor })}
        color={backgroundColor}
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
    <Grid item xs={12}>
      <FormControlLabel
        control={
          <Checkbox
            checked={!disableRipple}
            onChange={event =>
              changeItem({ disableRipple: !event.target.checked })
            }
            value="disableRipple"
          />
        }
        label="Анимация нажатия на кнопку"
      />
    </Grid>
  </Fragment>
);

const ButtonPlugin = ({ componentProps }) => (
  <View.Component {...componentProps} />
);

export default {
  ...View,
  Component: ButtonPlugin,
  Settings
};
