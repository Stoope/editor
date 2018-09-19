import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ColorPicker from "@/app/SettingsHelpers/ColorPicker";
import TextField from "@/app/SettingsHelpers/TextField";
import SettingsSidebar from "@/app/SettingsSidebar";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const styles = () => ({
  grid: {
    marginBottom: 16
  }
});

const GridSettings = ({
  isSettingsOpen,
  closeSidebar,
  changeItem,
  innerSettings,
  isSection,
  classes: { grid },
  componentProps: {
    color,
    alignItems,
    justifyContent,
    xs,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    flexDirection
  }
}) => (
  <SettingsSidebar isOpen={isSettingsOpen} onClose={closeSidebar}>
    <Grid spacing={8} item container className={grid}>
      <Grid item xs={12}>
        <Typography variant="title">Общие настройки</Typography>
      </Grid>
      <Grid item xs={12}>
        <ColorPicker onChange={color => changeItem({ color })} color={color} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          label="Ширина блока"
          value={xs}
          onChange={xs => changeItem({ xs })}
        >
          {[
            { value: "auto", label: "Автоматически" },
            { value: true, label: "Все доступное пространство" },
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
          label="Выравнивание по вертикали"
          value={alignItems}
          onChange={alignItems => changeItem({ alignItems })}
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
          label="Выравнивание по горизонтали"
          value={justifyContent}
          onChange={justifyContent => changeItem({ justifyContent })}
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
      {isSection && (
        <Grid item xs={12}>
          <TextField
            select
            label="Расположение блоков"
            value={flexDirection}
            onChange={flexDirection => changeItem({ flexDirection })}
          >
            {[
              { value: "row", label: "В строку" },
              { value: "row-reverse", label: "В строку в обратном порядке" },
              { value: "column", label: "В колонку" },
              {
                value: "column-reverse",
                label: "В колонку в обратном порядке"
              }
            ].map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      )}
      <Grid item xs={6}>
        <TextField
          inputAdornmentContent="px"
          label="Отступ сверху"
          type="number"
          value={paddingTop}
          onChange={paddingTop => changeItem({ paddingTop })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          inputAdornmentContent="px"
          label="Отступ снизу"
          type="number"
          value={paddingBottom}
          onChange={paddingBottom => changeItem({ paddingBottom })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          inputAdornmentContent="px"
          label="Отступ слева"
          type="number"
          value={paddingLeft}
          onChange={paddingLeft => changeItem({ paddingLeft })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          inputAdornmentContent="px"
          label="Отступ вправа"
          type="number"
          value={paddingRight}
          onChange={paddingRight => changeItem({ paddingRight })}
        />
      </Grid>
    </Grid>
    {innerSettings && (
      <Grid spacing={8} item container className={grid}>
        {innerSettings.map(({ Component, id, ...state }) => (
          <Component
            changeItem={props => changeItem({ ...props, id })}
            key={id}
            state={state}
          />
        ))}
      </Grid>
    )}
  </SettingsSidebar>
);

export default withStyles(styles)(GridSettings);
