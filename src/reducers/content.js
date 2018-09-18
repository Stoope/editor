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
      section: true,
      xs: 12,
      content: [
        {
          type: "Grid",
          id: "sy56mJNkLjPXTT0Rg3CcD",
          item: true,
          container: true,
          alignItems: "stretch",
          justify: "flex-start",
          xs: 3,
          content: [
            {
              type: "TestPlugin",
              height: 800,
              uri:
                "https://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_1500.jpg",
              id: "H7wvKz4MGPLlOk5KxrCbY"
            }
          ]
        },
        {
          type: "Grid",
          id: "j84OsY1Tsh9vEgeSxHnAb",
          item: true,
          container: true,
          alignItems: "center",
          justify: "center",
          xs: 3,
          content: [
            {
              type: "ButtonPlugin",
              text: "Кнопка",
              variant: "contained",
              id: "eeOm2zwKtVI_S2MbYElyB"
            }
          ]
        },
        {
          type: "Grid",
          id: "5prnqWD~TdNDTHFM_Tveh",
          item: true,
          container: true,
          alignItems: "stretch",
          justify: "flex-start",
          xs: 3,
          content: [
            {
              type: "TestPlugin",
              height: 800,
              uri:
                "https://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_1500.jpg",
              id: "fZX7hfa71V~wJmO2jHsp8"
            }
          ]
        },
        {
          type: "Grid",
          id: "HxS~MQ0quAF99zorfTqUK",
          item: true,
          container: true,
          alignItems: "center",
          justify: "center",
          xs: 3,
          content: [
            {
              type: "ButtonPlugin",
              text: "Кнопка",
              variant: "contained",
              id: "XD5IjUdTMDrsE6Yb7oOlb"
            }
          ]
        }
      ]
    }
  ]
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(JSON.stringify(state));
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
