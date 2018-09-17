import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Content from "./Content";
import AddBlockSidebar from "./AddBlockSidebar";
import {
  REMOVE_EDITOR_CONTENT_ITEM,
  CHANGE_EDITOR_CONTENT_ITEM,
  COPY_EDITOR_CONTENT_ITEM,
  MOVE_EDITOR_CONTENT_ITEM_UP,
  MOVE_EDITOR_CONTENT_ITEM_DOWN,
  OPEN_EDITOR_ADD_BLOCK,
  CLOSE_EDITOR_ADD_BLOCK,
  ADD_EDITOR_CONTENT_ITEM_AFTER,
  RESIZE_EDITOR_ITEMS_EQUAL
} from "@/actions";

const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex"
  }
});

const App = ({
  classes: { root },
  removeItem,
  changeItem,
  copyItem,
  moveItemUp,
  moveItemDown,
  openAddBlockSidebar,
  content,
  addBlock,
  closeAddBlockSidebar,
  addItemAfter,
  resizeItems
}) => (
  <div className={root}>
    <Content
      content={content}
      removeItem={removeItem}
      changeItem={changeItem}
      copyItem={copyItem}
      moveItemUp={moveItemUp}
      moveItemDown={moveItemDown}
      openAddBlockSidebar={openAddBlockSidebar}
    />
    <AddBlockSidebar
      addBlock={addBlock}
      closeAddBlockSidebar={closeAddBlockSidebar}
      addItemAfter={addItemAfter}
      resizeItems={resizeItems}
    />
  </div>
);

const mapStateToProps = state => ({
  content: state.content.content,
  addBlock: state.addBlock
});

export default connect(
  mapStateToProps,
  {
    removeItem: REMOVE_EDITOR_CONTENT_ITEM,
    changeItem: CHANGE_EDITOR_CONTENT_ITEM,
    copyItem: COPY_EDITOR_CONTENT_ITEM,
    moveItemUp: MOVE_EDITOR_CONTENT_ITEM_UP,
    moveItemDown: MOVE_EDITOR_CONTENT_ITEM_DOWN,
    openAddBlockSidebar: OPEN_EDITOR_ADD_BLOCK,
    closeAddBlockSidebar: CLOSE_EDITOR_ADD_BLOCK,
    addItemAfter: ADD_EDITOR_CONTENT_ITEM_AFTER,
    resizeItems: RESIZE_EDITOR_ITEMS_EQUAL
  }
)(withStyles(styles)(App));
