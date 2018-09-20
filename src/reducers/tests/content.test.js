import reducer from "../content";
import { copyItem } from "../helpers";
import * as constants from "../../constants";

const initialState = {
  content: [
    {
      id: 1,
      content: [
        {
          id: 4,
          content: [
            {
              id: 7
            },
            {
              id: 8
            }
          ]
        }
      ]
    },
    {
      id: 2
    },
    {
      id: 3,
      content: [
        {
          id: 5
        },
        {
          id: 6
        }
      ]
    }
  ]
};

describe("content helpers", () => {
  const item = {
    type: "Grid",
    id: "u39b~3_VQ1EJ2m1oFPEWy",
    item: true,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    xs: 3,
    content: [
      {
        type: "EditorPlugin",
        width: "100%",
        height: "auto",
        value:
          '<h1><span class="ql-size-huge" style="color: rgb(0, 102, 204);">5 000</span></h1><p><span class="ql-size-large">Обучающихся студентов в год</span></p>',
        id: "w3P4bOZAt9yNxKYyjeybC"
      }
    ],
    paddingRight: 50
  };
  it("should change id", () => {
    expect(copyItem(item).id).not.toBe(item.id);
  });
  it("should change id deep", () => {
    expect(copyItem(item).content[0].id).not.toBe(item.content[0].id);
  });
});

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
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
        payload: 7
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: [
                {
                  id: 8
                }
              ]
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
              content: [
                {
                  id: 7
                },
                {
                  id: 8
                }
              ]
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
          id: 8,
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
              content: [
                {
                  id: 7
                },
                {
                  id: 8,
                  test: true
                }
              ]
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
              content: [
                {
                  id: 7
                },
                {
                  id: 8
                }
              ]
            }
          ]
        },
        {
          content: [
            {
              content: [{}, {}]
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
        payload: 7
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: [
                {
                  id: 7
                },
                {},
                {
                  id: 8
                }
              ]
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
          id: 2
        },
        {
          id: 1,
          content: [
            {
              id: 4,
              content: [
                {
                  id: 7
                },
                {
                  id: 8
                }
              ]
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
        payload: 8
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: [
                {
                  id: 8
                },
                {
                  id: 7
                }
              ]
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
        payload: 2
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: [
                {
                  id: 7
                },
                {
                  id: 8
                }
              ]
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
            }
          ]
        },
        {
          id: 2
        }
      ]
    });
  });
  it("should handle MOVE_EDITOR_CONTENT_ITEM_DOWN deep", () => {
    expect(
      reducer(initialState, {
        type: constants.MOVE_EDITOR_CONTENT_ITEM_DOWN,
        payload: 7
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: [
                {
                  id: 8
                },
                {
                  id: 7
                }
              ]
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
        payload: { id: 1, content: { test: "test" } }
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: [
                {
                  id: 7
                },
                {
                  id: 8
                }
              ]
            }
          ]
        },
        { test: "test" },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
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
        payload: { id: 7, content: { test: "test" } }
      })
    ).toMatchObject({
      content: [
        {
          id: 1,
          content: [
            {
              id: 4,
              content: [
                {
                  id: 7
                },
                { test: "test" },
                {
                  id: 8
                }
              ]
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3,
          content: [
            {
              id: 5
            },
            {
              id: 6
            }
          ]
        }
      ]
    });
  });
  it("should handle RESIZE_EDITOR_ITEMS_EQUAL", () => {
    expect(
      reducer(
        {
          content: [
            {
              id: 1,
              type: "Grid",
              xs: 12,
              content: [
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 14,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 24,
                  content: [
                    {
                      id: 7
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: constants.RESIZE_EDITOR_ITEMS_EQUAL,
          payload: 4
        }
      )
    ).toMatchObject({
      content: [
        {
          id: 1,
          type: "Grid",
          xs: 12,
          content: [
            {
              type: "Grid",
              xs: 4,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 4,
              id: 14,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 4,
              id: 24,
              content: [
                {
                  id: 7
                }
              ]
            }
          ]
        }
      ]
    });
  });
  it("should handle RESIZE_EDITOR_ITEMS_EQUAL deep", () => {
    expect(
      reducer(
        {
          content: [
            {
              id: 10,
              type: "Grid",
              xs: 12,
              content: [
                {
                  id: 1,
                  type: "Grid",
                  xs: 12,
                  content: [
                    {
                      type: "Grid",
                      xs: 12,
                      id: 4,
                      content: [
                        {
                          id: 7
                        }
                      ]
                    },
                    {
                      type: "Grid",
                      xs: 12,
                      id: 14,
                      content: [
                        {
                          id: 7
                        }
                      ]
                    },
                    {
                      type: "Grid",
                      xs: 12,
                      id: 24,
                      content: [
                        {
                          id: 7
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: constants.RESIZE_EDITOR_ITEMS_EQUAL,
          payload: 4
        }
      )
    ).toMatchObject({
      content: [
        {
          id: 10,
          type: "Grid",
          xs: 12,
          content: [
            {
              id: 1,
              type: "Grid",
              xs: 12,
              content: [
                {
                  type: "Grid",
                  xs: 4,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 4,
                  id: 14,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 4,
                  id: 24,
                  content: [
                    {
                      id: 7
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
  });
  it("should handle RESIZE_EDITOR_ITEMS_EQUAL more then 12 items", () => {
    expect(
      reducer(
        {
          content: [
            {
              id: 1,
              type: "Grid",
              xs: 12,
              content: [
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: constants.RESIZE_EDITOR_ITEMS_EQUAL,
          payload: 4
        }
      )
    ).toMatchObject({
      content: [
        {
          id: 1,
          type: "Grid",
          xs: 12,
          content: [
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 1,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            }
          ]
        }
      ]
    });
  });
  it("should handle RESIZE_EDITOR_ITEMS_EQUAL not equal", () => {
    expect(
      reducer(
        {
          content: [
            {
              id: 1,
              type: "Grid",
              xs: 12,
              content: [
                {
                  type: "Grid",
                  xs: 12,
                  id: 4,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 14,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 24,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 14,
                  content: [
                    {
                      id: 7
                    }
                  ]
                },
                {
                  type: "Grid",
                  xs: 12,
                  id: 24,
                  content: [
                    {
                      id: 7
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: constants.RESIZE_EDITOR_ITEMS_EQUAL,
          payload: 4
        }
      )
    ).toMatchObject({
      content: [
        {
          id: 1,
          type: "Grid",
          xs: 12,
          content: [
            {
              type: "Grid",
              xs: 2,
              id: 4,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 2,
              id: 14,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 2,
              id: 24,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 2,
              id: 14,
              content: [
                {
                  id: 7
                }
              ]
            },
            {
              type: "Grid",
              xs: 4,
              id: 24,
              content: [
                {
                  id: 7
                }
              ]
            }
          ]
        }
      ]
    });
  });
});
