import nanoid from "nanoid";
import * as constants from "~/constants";

const initialState = {
  content: [
    {
      id: 1,
      type: "Grid",
      container: true,
      content: [
        {
          id: 4,
          item: true,
          type: "Grid",
          xs: 12,
          content: "content1"
        }
      ]
    },
    {
      id: 2,
      type: "Grid",
      container: true,
      content: [
        {
          id: 5,
          item: true,
          type: "Grid",
          xs: 12,
          content: "content2"
        }
      ]
    },
    {
      id: 3,
      type: "Grid",
      container: true,
      content: [
        {
          id: 6,
          item: true,
          type: "Grid",
          xs: 12,
          content: "content3"
        }
      ]
    }
  ]
};

const insertInArray = (index, item, array) => {
  const newArray = [...array];
  newArray.splice(index, 0, item);
  return newArray;
};

const removeItemById = (id, content) => {
  if (content.id === id) {
    return undefined;
  }
  if (Array.isArray(content)) {
    return content
      .map(element => removeItemById(id, element))
      .filter(element => element != null);
  }
  if (Array.isArray(content.content)) {
    return {
      ...content,
      content: content.content
        .map(element => removeItemById(id, element))
        .filter(element => element != null)
    };
  }
  return content;
};

const changeItemById = (props, content) => {
  if (content.id === props.id) {
    return { ...content, ...props };
  }
  if (Array.isArray(content)) {
    return content.map(element => changeItemById(props, element));
  }
  if (Array.isArray(content.content)) {
    return {
      ...content,
      content: content.content.map(element => changeItemById(props, element))
    };
  }
  return content;
};

const copyItemById = (id, content) => {
  if (Array.isArray(content)) {
    const item = content.find(element => element.id === id);
    if (item) {
      const index = content.findIndex(element => element.id === id);
      return insertInArray(index, { ...item, id: nanoid() }, content).map(
        element => copyItemById(id, element)
      );
    }
    return content.map(element => copyItemById(id, element));
  }
  if (Array.isArray(content.content)) {
    const item = content.content.find(element => element.id === id);
    if (item) {
      const index = content.content.findIndex(element => element.id === id);
      return {
        ...content,
        content: insertInArray(
          index,
          { ...item, id: nanoid() },
          content.content
        ).map(element => copyItemById(id, element))
      };
    }
    return {
      ...content,
      content: content.content.map(element => copyItemById(id, element))
    };
  }
  if (content.id === id) {
    return [content, { ...content, id: nanoid() }];
  }
  return content;
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.REMOVE_EDITOR_CONTENT_ITEM:
      return {
        ...state,
        content: removeItemById(payload, state.content)
      };
    case constants.CHANGE_EDITOR_CONTENT_ITEM:
      return {
        ...state,
        content: changeItemById(payload, state.content)
      };
    case constants.COPY_EDITOR_CONTENT_ITEM:
      return {
        ...state,
        content: copyItemById(payload, state.content)
      };
    default:
      return state;
  }
};

export default reducer;
