import React from "react";
import * as Plugins from "../Plugins";

const PluginValues = Object.values(Plugins);

const renderComponent = (component, props) => {
  if (component === null) {
    return null;
  }
  switch (typeof component) {
    case "undefined":
      return null;
    case "number":
    case "boolean":
    case "string":
      return component;
    default:
      break;
  }
  const Component = PluginValues.find(item => item.id === component.type);
  const innerSettings = component.content
    ? component.content
        .map(element => {
          const elementPlugin = PluginValues.find(
            item => item.id === element.type
          );
          if (elementPlugin != null) {
            return { Component: elementPlugin.Settings, ...element };
          }
          return null;
        })
        .filter(element => element.Component != null)
    : [];
  if (Component) {
    return (
      <Component.Component
        innerSettings={innerSettings}
        componentProps={component}
        {...props}
        key={component.id}
      >
        <RenderChildren content={component.content} {...props} />
      </Component.Component>
    );
  }
  return null;
};

const RenderChildren = ({ content, ...props }) =>
  Array.isArray(content)
    ? content.map((component, index, array) =>
        renderComponent(component, {
          ...props,
          isFirstChild: index === 0,
          isLastChild: index === array.length - 1
        })
      )
    : renderComponent(content, props);

export default RenderChildren;
