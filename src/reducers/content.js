import * as constants from "~/constants";

const initialState = {
  mode: "adding",
  content: [
    {
      key: 1,
      type: "Grid",
      container: true,
      content: [
        {
          key: 2,
          item: true,
          type: "Grid",
          xs: 12,
          content: "content"
        }
      ]
    }
  ]
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.CHANGE_EDITOR_MODE:
      return {
        ...state,
        mode: payload
      };
    default:
      return state;
  }
};

export default reducer;
