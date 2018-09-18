import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ColorPicker from "@/app/SettingsHelpers/ColorPicker";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import View from "./View";

const Settings = ({
  changeItem,
  state: {
    text,
    borderRadius,
    borderRadiusType,
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
        fullWidth
        label="Текст кнопки"
        value={text}
        onChange={event => changeItem({ text: event.target.value || "" })}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>
        }}
        fullWidth
        label="размер шрифта"
        type="number"
        value={fontSize}
        onChange={event => changeItem({ fontSize: +event.target.value || 0 })}
      />
    </Grid>
    <Grid container spacing={8} alignItems="flex-end" item xs={12}>
      <Grid item xs={8}>
        <TextField
          fullWidth
          type="number"
          label="Скругление"
          value={borderRadius}
          onChange={event =>
            changeItem({ borderRadius: +event.target.value || 0 })
          }
        />
      </Grid>
      <Grid item xs={4}>
        <Select
          fullWidth
          label="Скругление"
          value={borderRadiusType}
          onChange={event =>
            changeItem({ borderRadiusType: event.target.value })
          }
        >
          {[{ value: "px", label: "px" }, { value: "%", label: "%" }].map(
            option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            )
          )}
        </Select>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <TextField
        select
        fullWidth
        label="Тип кнопки"
        value={variant}
        onChange={event => changeItem({ variant: event.target.value })}
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
        fullWidth
        label="Ссылка перехода при клике"
        placeholder="https://example.com"
        value={href}
        onChange={event => changeItem({ href: event.target.value || "" })}
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
