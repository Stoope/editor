import * as constants from "@/constants";

export const REMOVE_EDITOR_CONTENT_ITEM = payload => ({
  type: constants.REMOVE_EDITOR_CONTENT_ITEM,
  payload
});
export const CHANGE_EDITOR_CONTENT_ITEM = payload => ({
  type: constants.CHANGE_EDITOR_CONTENT_ITEM,
  payload
});
export const COPY_EDITOR_CONTENT_ITEM = payload => ({
  type: constants.COPY_EDITOR_CONTENT_ITEM,
  payload
});
export const MOVE_EDITOR_CONTENT_ITEM_UP = payload => ({
  type: constants.MOVE_EDITOR_CONTENT_ITEM_UP,
  payload
});
export const MOVE_EDITOR_CONTENT_ITEM_DOWN = payload => ({
  type: constants.MOVE_EDITOR_CONTENT_ITEM_DOWN,
  payload
});
export const ADD_EDITOR_CONTENT_ITEM_AFTER = payload => ({
  type: constants.ADD_EDITOR_CONTENT_ITEM_AFTER,
  payload
});
export const RESIZE_EDITOR_ITEMS_EQUAL = payload => ({
  type: constants.RESIZE_EDITOR_ITEMS_EQUAL,
  payload
});
