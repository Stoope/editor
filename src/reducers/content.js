import * as constants from "@/constants";
import {
  removeItemById,
  changeItemById,
  copyItemById,
  moveItemById,
  addItemAfterById,
  resizeItemsById
} from "./helpers";

const initialState = {
  content: [
    {
      id: "qmAHBOyA1MSvQ2O7Gv01U",
      type: "Grid",
      container: true,
      item: true,
      xs: 12,
      content: [
        {
          id: "cOao6IjvT5~uM6f15eyIm",
          type: "Grid",
          item: true,
          xs: 6,
          content: [
            {
              id: "LaxSiJvKkDt9K5LmDTVby",
              height: 800,
              type: "TestPlugin",
              uri: `https://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_1500.jpg`
            }
          ]
        }
      ]
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
    case constants.ADD_EDITOR_CONTENT_ITEM_AFTER:
      return {
        ...state,
        content: addItemAfterById(payload, state.content)
      };
    case constants.RESIZE_EDITOR_ITEMS_EQUAL:
      return {
        ...state,
        content: resizeItemsById(payload, state.content)
      };
    default:
      return state;
  }
};

export default reducer;
