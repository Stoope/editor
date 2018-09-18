import React from "react";
import View from "./View";

const ButtonPlugin = ({ componentProps }) => (
  <View.Component {...componentProps} />
);

export default {
  ...View,
  Component: ButtonPlugin
};
