import React from "react";
import TextField from "@/app/SettingsHelpers/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const ColumnSize = props => (
  <TextField select {...props}>
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
);

export default ColumnSize;
