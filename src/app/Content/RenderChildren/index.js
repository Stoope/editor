import React from "react";
import Grid from "../Grid";

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
  let Component;
  switch (component.type) {
    case "Grid":
      Component = Grid;
      break;
    default:
      Component = null;
      break;
  }
  if (Component === null) {
    return null;
  }
  return (
    <Component {...component} {...props} key={component.id}>
      <RenderChildren content={component.content} />
    </Component>
  );
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
