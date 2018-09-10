import reducer from "../content";
import * as constants from "../../constants";

const initialState = {
  content: [
    {
      id: 1,
      content: [
        {
          id: 4,
          content: "content4"
        }
      ]
    },
    {
      id: 2,
      content: "content2"
    },
    {
      id: 3,
      content: [
        {
          id: 5,
          content: "content5"
        },
        {
          id: 6,
          content: "content6"
        }
      ]
    }
  ]
};

describe("content reducer", () => {
  it("should handle REMOVE_EDITOR_CONTENT_ITEM", () => {
    expect(
      reducer(initialState, {
        type: constants.REMOVE_EDITOR_CONTENT_ITEM,
        payload: 1
      })
    ).toMatchObject({
      content: [
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              content: "content5"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle REMOVE_EDITOR_CONTENT_ITEM deep", () => {
    expect(
      reducer(initialState, {
        type: constants.REMOVE_EDITOR_CONTENT_ITEM,
        payload: 5
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle CHANGE_EDITOR_CONTENT_ITEM", () => {
    expect(
      reducer(initialState, {
        type: constants.CHANGE_EDITOR_CONTENT_ITEM,
        payload: {
          id: 1,
          test: true
        }
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          test: true,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              content: "content5"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle CHANGE_EDITOR_CONTENT_ITEM deep", () => {
    expect(
      reducer(initialState, {
        type: constants.CHANGE_EDITOR_CONTENT_ITEM,
        payload: {
          id: 5,
          test: true
        }
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              test: true,
              content: "content5"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle COPY_EDITOR_CONTENT_ITEM", () => {
    expect(
      reducer(initialState, {
        type: constants.COPY_EDITOR_CONTENT_ITEM,
        payload: 1
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              content: "content5"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle COPY_EDITOR_CONTENT_ITEM deep", () => {
    expect(
      reducer(initialState, {
        type: constants.COPY_EDITOR_CONTENT_ITEM,
        payload: 5
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              content: "content5"
            },
            {
              content: "content5"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle MOVE_EDITOR_CONTENT_ITEM_UP", () => {
    expect(
      reducer(initialState, {
        type: constants.MOVE_EDITOR_CONTENT_ITEM_UP,
        payload: 2
      })
    ).toMatchObject({
      content: [
        {
          id: 2,
          content: "content2"
        },
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              content: "content5"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle MOVE_EDITOR_CONTENT_ITEM_UP deep", () => {
    expect(
      reducer(initialState, {
        type: constants.MOVE_EDITOR_CONTENT_ITEM_UP,
        payload: 6
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 6,
              content: "content6"
            },
            {
              id: 5,
              content: "content5"
            }
          ]
        }
      ]
    });
  });
  it("should handle MOVE_EDITOR_CONTENT_ITEM_DOWN", () => {
    expect(
      reducer(initialState, {
        type: constants.MOVE_EDITOR_CONTENT_ITEM_DOWN,
        payload: 1
      })
    ).toMatchObject({
      content: [
        {
          id: 2,
          content: "content2"
        },
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              content: "content5"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle MOVE_EDITOR_CONTENT_ITEM_DOWN deep", () => {
    expect(
      reducer(initialState, {
        type: constants.MOVE_EDITOR_CONTENT_ITEM_DOWN,
        payload: 5
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 6,
              content: "content6"
            },
            {
              id: 5,
              content: "content5"
            }
          ]
        }
      ]
    });
  });
  it("should handle ADD_EDITOR_CONTENT_ITEM_AFTER", () => {
    expect(
      reducer(initialState, {
        type: constants.ADD_EDITOR_CONTENT_ITEM_AFTER,
        payload: { id: 1, content: { content: "content7" } }
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          content: "content7"
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              content: "content5"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
  it("should handle ADD_EDITOR_CONTENT_ITEM_AFTER deep", () => {
    expect(
      reducer(initialState, {
        type: constants.ADD_EDITOR_CONTENT_ITEM_AFTER,
        payload: { id: 5, content: { content: "content7" } }
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: "content4"
            }
          ]
        },
        {
          id: 2,
          content: "content2"
        },
        {
          id: 3,
          content: [
            {
              id: 5,
              content: "content5"
            },
            {
              content: "content7"
            },
            {
              id: 6,
              content: "content6"
            }
          ]
        }
      ]
    });
  });
});
