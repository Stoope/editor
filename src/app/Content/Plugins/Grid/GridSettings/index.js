import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ColorPicker from "@/app/SettingsHelpers/ColorPicker";
import TextField from "@/app/SettingsHelpers/TextField";
import ColumnSize from "@/app/SettingsHelpers/ColumnSize";
import FileUpload from "@/app/SettingsHelpers/FileUpload";
import SettingsSidebar from "@/app/SettingsSidebar";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
    sm,
    md,
    lg,
    xl,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    flexDirection,
    bgImageSrc,
    backgroundRepeat,
    backgroundPosition,
    backgroundAttachment,
    backgroundSize,
    spacing,
    only = []
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
        <FileUpload
          label="Url изображения для заднего фона"
          value={bgImageSrc}
          onChange={bgImageSrc => changeItem({ bgImageSrc })}
        />
      </Grid>
      {bgImageSrc && (
        <Fragment>
          <Grid item xs={12}>
            <TextField
              select
              label="Повтор изображения"
              value={backgroundRepeat}
              onChange={backgroundRepeat => changeItem({ backgroundRepeat })}
            >
              {[
                { value: "no-repeat", label: "Не повторять" },
                { value: "repeat", label: "Повторять" },
                { value: "repeat-x", label: "Повторять по горизонтали" },
                { value: "repeat-y", label: "Повторять по вертикали" }
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
              label="Положение изображения"
              value={backgroundPosition}
              onChange={backgroundPosition =>
                changeItem({ backgroundPosition })
              }
            >
              {[
                { value: "top left", label: "В левом верхнем углу" },
                { value: "top", label: "По центру вверху" },
                { value: "right top ", label: "В правом верхнем углу" },
                { value: "left", label: "По левому краю и по центру" },
                { value: "center", label: "По центру" },
                { value: "right", label: "По правому краю и по центру" },
                { value: "bottom left ", label: "В левом нижнем углу" },
                { value: "bottom", label: "По центру внизу" },
                { value: "bottom right", label: "В правом нижнем углу" }
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
              label="Поведение изображения при скролле"
              value={backgroundAttachment}
              onChange={backgroundAttachment =>
                changeItem({ backgroundAttachment })
              }
            >
              {[
                { value: "fixed", label: "Неподвижное" },
                { value: "scroll", label: "Скроллится вместе с контентом" }
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
              label="Масштабирование изображения"
              value={backgroundSize}
              onChange={backgroundSize => changeItem({ backgroundSize })}
            >
              {[
                { value: "auto", label: "Автоматически" },
                {
                  value: "cover",
                  label: "Масштабировать на весь задний фон"
                },
                {
                  value: "contain",
                  label: "Масштабировать с сохранением пропорций"
                }
              ].map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Fragment>
      )}
      <Grid item xs={12}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Адаптивная ширина блока</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid spacing={8} item container className={grid}>
              <Grid container spacing={8} alignItems="flex-end" item xs={12}>
                <Grid item xs>
                  <ColumnSize
                    label=">= 0px"
                    value={xs}
                    onChange={xs => changeItem({ xs })}
                  />
                </Grid>
                <Grid item xs="auto">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={only.includes("xs")}
                        onChange={event =>
                          changeItem({
                            only: event.target.checked
                              ? [...only, "xs"]
                              : only.filter(item => item !== "xs")
                          })
                        }
                        value="only"
                      />
                    }
                    label="Скрывать"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end" item xs={12}>
                <Grid item xs>
                  <ColumnSize
                    label=">= 600px"
                    value={sm}
                    onChange={sm => changeItem({ sm })}
                  />
                </Grid>
                <Grid item xs="auto">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={only.includes("sm")}
                        onChange={event =>
                          changeItem({
                            only: event.target.checked
                              ? [...only, "sm"]
                              : only.filter(item => item !== "sm")
                          })
                        }
                        value="only"
                      />
                    }
                    label="Скрывать"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end" item xs={12}>
                <Grid item xs>
                  <ColumnSize
                    label=">= 960px"
                    value={md}
                    onChange={md => changeItem({ md })}
                  />
                </Grid>
                <Grid item xs="auto">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={only.includes("md")}
                        onChange={event =>
                          changeItem({
                            only: event.target.checked
                              ? [...only, "md"]
                              : only.filter(item => item !== "md")
                          })
                        }
                        value="only"
                      />
                    }
                    label="Скрывать"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end" item xs={12}>
                <Grid item xs>
                  <ColumnSize
                    label=">= 1280px"
                    value={lg}
                    onChange={lg => changeItem({ lg })}
                  />
                </Grid>
                <Grid item xs="auto">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={only.includes("lg")}
                        onChange={event =>
                          changeItem({
                            only: event.target.checked
                              ? [...only, "lg"]
                              : only.filter(item => item !== "lg")
                          })
                        }
                        value="only"
                      />
                    }
                    label="Скрывать"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end" item xs={12}>
                <Grid item xs>
                  <ColumnSize
                    label=">= 1920px"
                    value={xl}
                    onChange={xl => changeItem({ xl })}
                  />
                </Grid>
                <Grid item xs="auto">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={only.includes("xl")}
                        onChange={event =>
                          changeItem({
                            only: event.target.checked
                              ? [...only, "xl"]
                              : only.filter(item => item !== "xl")
                          })
                        }
                        value="only"
                      />
                    }
                    label="Скрывать"
                  />
                </Grid>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
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
      {isSection && (
        <Grid item xs={12}>
          <TextField
            select
            label="Отступ между блоками"
            value={spacing}
            onChange={spacing => changeItem({ spacing })}
          >
            {[
              { value: "0", label: "0px" },
              { value: "8", label: "8px" },
              { value: "16", label: "16px" },
              { value: "24", label: "24px" },
              { value: "32", label: "32px" },
              { value: "40", label: "40px" }
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
