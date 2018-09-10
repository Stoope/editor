import * as constants from "@/constants";

export const OPEN_EDITOR_ADD_BLOCK = payload => ({
  type: constants.OPEN_EDITOR_ADD_BLOCK,
  payload
});
export const CLOSE_EDITOR_ADD_BLOCK = payload => ({
  type: constants.CLOSE_EDITOR_ADD_BLOCK,
  payload
});
