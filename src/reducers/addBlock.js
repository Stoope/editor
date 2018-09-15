import * as constants from "@/constants";

const initialState = {
  isOpen: false,
  currentId: null,
  props: {}
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.OPEN_EDITOR_ADD_BLOCK:
      return {
        ...state,
        isOpen: true,
        currentId: payload.id,
        props: payload.props
      };
    case constants.CLOSE_EDITOR_ADD_BLOCK:
      return {
        ...state,
        isOpen: false,
        currentId: null,
        props: {}
      };
    default:
      return state;
  }
};

export default reducer;
