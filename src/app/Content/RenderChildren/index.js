import React from "react";
import * as Plugins from "../Plugins";

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
  const Component = Object.values(Plugins).find(
    item => item.id === component.type
  );
  if (Component) {
    return (
      <Component.Component
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
          isFirstChild: index === 0,
          isLastChild: index === array.length - 1,
          ...props
        })
      )
    : renderComponent(content, props);

export default RenderChildren;
