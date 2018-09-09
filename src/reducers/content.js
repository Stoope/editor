import * as constants from "~/constants";
import {
  removeItemById,
  changeItemById,
  copyItemById,
  moveItemById
} from "./helpers";

const initialState = {
  content: [
    {
      id: 1,
      type: "Grid",
      container: true,
      content: "content1"
    },
    {
      id: 2,
      type: "Grid",
      container: true,
      content: "content2"
    },
    {
      id: 3,
      type: "Grid",
      container: true,
      content: "content3"
    }
  ]
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
    case constants.MOVE_EDITOR_CONTENT_ITEM_UP:
      return {
        ...state,
        content: moveItemById(payload, state.content, -1)
      };
    case constants.MOVE_EDITOR_CONTENT_ITEM_DOWN:
      return {
        ...state,
        content: moveItemById(payload, state.content, 1)
      };
    default:
      return state;
  }
};

export default reducer;
