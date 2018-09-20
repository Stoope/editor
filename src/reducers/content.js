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
          xs: 2,
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
          id: "K7OIAM3recBuilkJUs3An",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 2,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<h1 class="ql-align-center">Заголовок</h1><p class="ql-align-center"><span class="ql-size-large" style="color: rgb(230, 0, 0);">Контент</span> <span style="background-color: rgb(0, 138, 0); color: rgb(255, 255, 255);">контент</span> <s>контент</s></p><p class="ql-align-center"><s><img src="data:image/png;base64,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"></s></p>',
              id: "ovqwp3Nj3pmRtyUI4VCXV"
            }
          ]
        },
        {
          type: "Grid",
          id: "9NLUs1_6Udgox~wOPL4j_",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 2,
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
          xs: 2,
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
          xs: 4,
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
