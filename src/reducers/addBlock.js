import * as constants from "@/constants";

const initialState = {
  isOpen: false,
  currentId: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.OPEN_EDITOR_ADD_BLOCK:
      return {
        ...state,
        isOpen: true,
        currentId: payload
      };
    case constants.CLOSE_EDITOR_ADD_BLOCK:
      return {
        ...state,
        isOpen: false,
        currentId: null
      };
    default:
      return state;
  }
};

export default reducer;
