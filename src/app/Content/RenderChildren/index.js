import React, { Fragment } from "react";
import Grid from "../Grid";

const renderComponent = component => {
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
      Component = Fragment;
      break;
  }
  return (
    <Component {...component}>
      <RenderChildren content={component.content} />
    </Component>
  );
};

const RenderChildren = ({ content }) =>
  Array.isArray(content)
    ? content.map(component => renderComponent(component))
    : renderComponent(content);

export default RenderChildren;
