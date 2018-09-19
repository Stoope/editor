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
      type: "Grid",
      id: "GBLai8OjpRl9DPiVZJIcu",
      item: true,
      container: true,
      alignItems: "stretch",
      justifyContent: "flex-start",
      flexDirection: "row",
      xs: 12,
      section: true,
      content: [
        {
          type: "Grid",
          id: "uwbTyTSCHS9tMCnM76Ce0",
          item: true,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          xs: 3,
          content: [
            {
              type: "ButtonPlugin",
              text: "Кнопка",
              variant: "contained",
              borderRadius: 10,
              backgroundColor: "#e0e0e0",
              href: "",
              target: "_blank",
              disableRipple: false,
              fontSize: 16,
              id: "7NREQBuW7NXSLySViVmqD"
            }
          ],
          paddingTop: 200,
          paddingBottom: 200
        },
        {
          type: "Grid",
          id: "9NLUs1_6Udgox~wOPL4j_",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 3,
          content: [
            {
              type: "ImagePlugin",
              variant: "contained",
              borderRadius: 0,
              width: "auto",
              height: "auto",
              src:
                "https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg",
              href: "",
              target: "_blank",
              id: "wQflSPVrasypbxyfZ6keE"
            }
          ]
        },
        {
          type: "Grid",
          id: "AawQfi1J2a7av3MSomODk",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 3,
          content: [
            {
              type: "ButtonPlugin",
              text: "Кнопка",
              variant: "contained",
              borderRadius: 10,
              backgroundColor: "#e0e0e0",
              href: "",
              target: "_blank",
              disableRipple: false,
              fontSize: 16,
              id: "JLqM_sstLgZOTWSwXZNfD"
            }
          ]
        },
        {
          type: "Grid",
          id: "NS5PP1o5zeQj9s795m6pK",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 3,
          content: [
            {
              type: "ImagePlugin",
              variant: "contained",
              borderRadius: 0,
              href: "",
              target: "_blank",
              id: "1ReaFIyTKvz5f9QTNoYgb"
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
