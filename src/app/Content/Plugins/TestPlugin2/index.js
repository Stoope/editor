import React from "react";
import View from "./View";

const TestPlugin = ({ uri, height }) => (
  <View.Component uri={uri} height={height} />
);

export default {
  ...View,
  Component: TestPlugin
};
