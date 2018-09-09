import reducer from "../content";
import * as constants from "../../constants";

const initialState = {
  content: [
    {
      id: 1,
      type: "Grid",
      xs: 12,
      container: true,
      content: [
        {
          id: 4,
          type: "Grid",
          xs: 12,
          container: true,
          content: "content1"
        }
      ]
    },
    {
      id: 2,
      type: "Grid",
      xs: 12,
      container: true,
      content: "content2"
    },
    {
      id: 3,
      type: "Grid",
      xs: 12,
      container: true,
      content: [
        {
          id: 4,
          type: "Grid",
          xs: 12,
          container: true,
          content: "content1"
        }
      ]
    }
  ]
};

describe("content reducer", () => {
  it("should handle REMOVE_EDITOR_CONTENT_ITEM", () => {
    const initialState = reducer(undefined, { type: null });
    expect(
      reducer(
        {
          ...initialState,
          config: {
            ...initialState.config,
            theme: { typography: { htmlFontSize: 16 } }
          }
        },
        {
          type: constants.CHANGE_SETTINGS,
          payload: { theme: { typography: { fontSize: 5 } } }
        }
      )
    ).toMatchObject({
      config: { theme: { typography: { fontSize: 5, htmlFontSize: 16 } } }
    });
  });
});
