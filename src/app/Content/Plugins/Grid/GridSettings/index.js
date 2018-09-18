import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ColorPicker from "@/app/SettingsHelpers/ColorPicker";
import SettingsSidebar from "@/app/SettingsSidebar";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const GridSettings = ({
  isSettingsOpen,
  closeSidebar,
  changeItem,
  componentProps: {
    color,
    alignItems,
    justify,
    xs,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  }
}) => (
  <SettingsSidebar isOpen={isSettingsOpen} onClose={closeSidebar}>
    <Grid spacing={8} item container>
      <Grid item xs={12}>
        <Typography variant="title" gutterBottom>
          Общие настройки
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ColorPicker onChange={color => changeItem({ color })} color={color} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          label="Ширина блока"
          value={xs}
          onChange={event => changeItem({ xs: event.target.value })}
        >
          {[
            { value: 1, label: "1 колонка" },
            { value: 2, label: "2 колонки" },
            { value: 3, label: "3 колонки" },
            { value: 4, label: "4 колонки" },
            { value: 5, label: "5 колонок" },
            { value: 6, label: "6 колонок" },
            { value: 7, label: "7 колонок" },
            { value: 8, label: "8 колонок" },
            { value: 9, label: "9 колонок" },
            { value: 10, label: "10 колонок" },
            { value: 11, label: "11 колонок" },
            { value: 12, label: "12 колонок" }
          ].map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          label="Выравнивание по вертикали"
          value={alignItems}
          onChange={event => changeItem({ alignItems: event.target.value })}
        >
          {[
            { value: "flex-start", label: "С начала" },
            { value: "center", label: "В центре" },
            { value: "flex-end", label: "С конца" },
            { value: "stretch", label: "Растянуть" },
            { value: "baseline", label: "По базовой линии" }
          ].map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          label="Выравнивание по горизонтали"
          value={justify}
          onChange={event => changeItem({ justify: event.target.value })}
        >
          {[
            { value: "flex-start", label: "С начала" },
            { value: "center", label: "В центре" },
            { value: "flex-end", label: "С конца" },
            {
              value: "space-between",
              label: "Первый элемент вначале, последний в конце"
            },
            {
              value: "space-around",
              label: "Все элементы имеют полуразмерное пространство"
            },
            {
              value: "space-evenly",
              label: "Все элементы имеют равное пространство вокруг"
            }
          ].map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">px</InputAdornment>
          }}
          label="Отступ сверху"
          value={paddingTop}
          onChange={event =>
            changeItem({ paddingTop: +event.target.value || 0 })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">px</InputAdornment>
          }}
          fullWidth
          label="Отступ снизу"
          value={paddingBottom}
          onChange={event =>
            changeItem({ paddingBottom: +event.target.value || 0 })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">px</InputAdornment>
          }}
          label="Отступ слева"
          value={paddingLeft}
          onChange={event =>
            changeItem({ paddingLeft: +event.target.value || 0 })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">px</InputAdornment>
          }}
          fullWidth
          label="Отступ вправа"
          value={paddingRight}
          onChange={event =>
            changeItem({ paddingRight: +event.target.value || 0 })
          }
        />
      </Grid>
    </Grid>
  </SettingsSidebar>
);

export default GridSettings;
