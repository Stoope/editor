import * as constants from "~/constants";

const initialState = {
  mode: "adding"
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
