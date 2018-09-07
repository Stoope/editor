import * as constants from "~/constants";

export const REMOVE_EDITOR_CONTENT_ITEM = payload => ({
  type: constants.REMOVE_EDITOR_CONTENT_ITEM,
  payload
});
export const CHANGE_EDITOR_CONTENT_ITEM = payload => ({
  type: constants.CHANGE_EDITOR_CONTENT_ITEM,
  payload
});
