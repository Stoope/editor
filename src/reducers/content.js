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
      id: "nUqvHkjAwETVlk1wMwYGz",
      item: true,
      container: true,
      xs: 12,
      section: true,
      content: [
        {
          type: "Grid",
          id: "Tra6yKExlRqQ9~pss~G_W",
          item: true,
          container: true,
          alignItems: "center",
          justify: "center",
          xs: 3,
          content: [
            {
              type: "TestPlugin",
              height: 800,
              uri:
                "https://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_1500.jpg",
              id: "~BkjpncjIDsH2GKOfF6~Z"
            }
          ]
        },
        {
          type: "Grid",
          id: "y~AKE9HdjTkm1qm46tCLB",
          item: true,
          container: true,
          alignItems: "center",
          justify: "center",
          xs: 2,
          content: [
            {
              type: "ButtonPlugin",
              text: "Открыть СиБиЭс",
              variant: "contained",
              borderRadiusType: "px",
              borderRadius: 10,
              backgroundColor: "#0a7ac9",
              href: "https://cbsmba.com/",
              target: "_blank",
              disableRipple: false,
              fontSize: 30,
              id: "_uRQKTVRjV3p9KGtQe5cu"
            }
          ]
        },
        {
          type: "Grid",
          id: "Y3jtDw_xny8QK5UITS~Lu",
          item: true,
          container: true,
          alignItems: "center",
          justify: "center",
          xs: 3,
          content: [
            {
              type: "TestPlugin",
              height: 800,
              uri:
                "https://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_1500.jpg",
              id: "ZK3hPlzrJeWIhJpHZiBGx"
            }
          ]
        },
        {
          type: "Grid",
          id: "IV3g1Nm0xnJ0I3l5KJ9gZ",
          item: true,
          container: true,
          alignItems: "flex-end",
          justify: "flex-start",
          xs: 4,
          content: [
            {
              type: "ButtonPlugin",
              text: "Еще кнопка",
              variant: "flat",
              borderRadiusType: "%",
              borderRadius: 50,
              backgroundColor: "#00ff22",
              href: "",
              target: "_blank",
              disableRipple: false,
              fontSize: 20,
              id: "UHwoPzQG6o3cObd~ZbhTy"
            }
          ]
        }
      ]
    },
    {
      type: "Grid",
      id: "2S9to3Ad8vmtymZRNDSyM",
      item: true,
      container: true,
      xs: 12,
      section: true,
      content: [
        {
          type: "Grid",
          id: "y_Xha2zEYd1wf7~mV0WFP",
          item: true,
          container: true,
          alignItems: "center",
          justify: "center",
          xs: 6,
          content: [
            {
              type: "TestPlugin",
              height: 800,
              uri:
                "https://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_1500.jpg",
              id: "pF69wTVUu_321tfP9DkMP"
            }
          ]
        },
        {
          type: "Grid",
          id: "Eb8CAxBvqN_bUa0JuuRvL",
          item: true,
          container: true,
          alignItems: "center",
          justify: "center",
          xs: 6,
          content: [
            {
              type: "TestPlugin",
              height: 800,
              uri:
                "https://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_1500.jpg",
              id: "uKTRtRlsO7Qp9BysAl6jz"
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
