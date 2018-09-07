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
    default:
      return state;
  }
};

export default reducer;
