import React from "react";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import preview from "./preview.png";

const styles = () => ({
  root: {
    transition: `0.2s all`,
    textTransform: "none"
  }
});

const ViewComponent = ({
  classes: { root },
  theme,
  type,
  variant,
  text,
  borderRadiusType,
  href,
  target,
  disableRipple,
  ...rest
}) => (
  <Button
    href={href || undefined}
    target={target || undefined}
    variant={variant}
    disableRipple={disableRipple}
    size="large"
    className={root}
    style={{
      ...rest,
      borderRadius:
        borderRadiusType === "%" ? `${rest.borderRadius}%` : rest.borderRadius,
      color: rest.backgroundColor
        ? theme.palette.getContrastText(rest.backgroundColor)
        : "#000"
    }}
  >
    {text}
  </Button>
);

export default {
  Component: withStyles(styles)(withTheme()(ViewComponent)),
  id: "ButtonPlugin",
  name: "Кнопка",
  description: "Кнопка с выбором действия",
  defaultState: {
    type: "ButtonPlugin",
    text: "Кнопка",
    variant: "contained",
    borderRadiusType: "px",
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
    href: "",
    target: "_blank",
    disableRipple: false,
    fontSize: 16
  },
  preview
};
