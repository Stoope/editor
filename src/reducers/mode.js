import * as constants from "~/constants";

const initialState = {
  content: [
    {
      type: "Grid",
      container: true,
      children: [
        {
          type: "Grid",
          xs: 12,
          children: ["content"]
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
