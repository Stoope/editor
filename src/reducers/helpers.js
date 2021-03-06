import nanoid from "nanoid";

const insertInArray = (index, item, array) => {
  const newArray = [...array];
  newArray.splice(index + 1, 0, item);
  return newArray;
};

const swapItemsInArray = (indexFirst, indexSecond, array) => {
  const newArray = [...array];
  const element1 = newArray[indexFirst];
  newArray[indexFirst] = newArray[indexSecond];
  newArray[indexSecond] = element1;
  return newArray;
};

const findItemById = (id, content) => {
  let result = null;
  if (content.id === id) {
    result = content;
  }
  if (Array.isArray(content)) {
    content.forEach(element => {
      result = findItemById(id, element);
    });
  }
  if (content && Array.isArray(content.content)) {
    content.content.forEach(element => {
      result = findItemById(id, element);
    });
  }
  return result;
};

export const copyItem = content => {
  if (content && !Array.isArray(content)) {
    return {
      ...content,
      id: nanoid(),
      content: copyItem(content.content)
    };
  }
  if (Array.isArray(content)) {
    return content
      .map(element => copyItem(element))
      .filter(element => element != null);
  }
  if (content && Array.isArray(content.content)) {
    return {
      ...content,
      content: content.content
        .map(element => copyItem(element))
        .filter(element => element != null)
    };
  }
  return content;
};

export const removeItemById = (id, content) => {
  if (content.id === id) {
    return undefined;
  }
  if (Array.isArray(content)) {
    return content
      .map(element => removeItemById(id, element))
      .filter(element => element != null);
  }
  if (content && Array.isArray(content.content)) {
    return {
      ...content,
      content: content.content
        .map(element => removeItemById(id, element))
        .filter(element => element != null)
    };
  }
  return content;
};

export const changeItemById = (props, content) => {
  if (content.id === props.id) {
    return { ...content, ...props };
  }
  if (Array.isArray(content)) {
    return content.map(element => changeItemById(props, element));
  }
  if (content && Array.isArray(content.content)) {
    return {
      ...content,
      content: content.content.map(element => changeItemById(props, element))
    };
  }
  return content;
};

export const copyItemById = (id, content) => {
  if (Array.isArray(content)) {
    const item = content.find(element => element.id === id);
    if (item) {
      const index = content.findIndex(element => element.id === id);
      return insertInArray(index, copyItem(item), content).map(element =>
        copyItemById(id, element)
      );
    }
    return content.map(element => copyItemById(id, element));
  }
  if (content && Array.isArray(content.content)) {
    const item = content.content.find(element => element.id === id);
    if (item) {
      const index = content.content.findIndex(element => element.id === id);
      return {
        ...content,
        content: insertInArray(index, copyItem(item), content.content).map(
          element => copyItemById(id, element)
        )
      };
    }
    return {
      ...content,
      content: content.content.map(element => copyItemById(id, element))
    };
  }
  return content;
};

export const moveItemById = (id, content, indexChange) => {
  if (Array.isArray(content)) {
    const item = content.find(element => element.id === id);
    if (item) {
      const index = content.findIndex(element => element.id === id);
      return swapItemsInArray(index, index + indexChange, content).map(
        element => moveItemById(id, element, indexChange)
      );
    }
    return content.map(element => moveItemById(id, element, indexChange));
  }
  if (content && Array.isArray(content.content)) {
    const item = content.content.find(element => element.id === id);
    if (item) {
      const index = content.content.findIndex(element => element.id === id);
      return {
        ...content,
        content: swapItemsInArray(
          index,
          index + indexChange,
          content.content
        ).map(element => moveItemById(id, element, indexChange))
      };
    }
    return {
      ...content,
      content: content.content.map(element =>
        moveItemById(id, element, indexChange)
      )
    };
  }
  return content;
};

export const addItemAfterById = (props, content) => {
  if (Array.isArray(content)) {
    const item = content.find(element => element.id === props.id);
    if (item) {
      const index = content.findIndex(element => element.id === props.id);
      return insertInArray(
        index,
        { ...props.content, id: nanoid() },
        content
      ).map(element => addItemAfterById(props, element));
    }
    return content.map(element => addItemAfterById(props, element));
  }
  if (content && Array.isArray(content.content)) {
    const item = content.content.find(element => element.id === props.id);
    if (item) {
      const index = content.content.findIndex(
        element => element.id === props.id
      );
      return {
        ...content,
        content: insertInArray(
          index,
          { ...props.content, id: nanoid() },
          content.content
        ).map(element => addItemAfterById(props, element))
      };
    }
    return {
      ...content,
      content: content.content.map(element => addItemAfterById(props, element))
    };
  }
  return content;
};
export const resizeItemsById = (id, content) => {
  if (Array.isArray(content)) {
    if (content.find(element => element.id === id)) {
      const itemsCount = content.length;
      const itemSize = 12 / itemsCount > 1 ? Math.floor(12 / itemsCount) : 1;
      const rest = 12 % (itemsCount % 12);
      return content.map(
        (element, index) =>
          index === itemsCount - 1
            ? { ...element, xs: itemSize + rest }
            : { ...element, xs: itemSize }
      );
    }
    return content.map(element => resizeItemsById(id, element));
  }
  if (content && Array.isArray(content.content)) {
    if (content.content.find(element => element.id === id)) {
      const itemsCount = content.content.length;
      const itemSize = 12 / itemsCount > 1 ? Math.floor(12 / itemsCount) : 1;
      const rest = 12 % (itemsCount % 12);
      return {
        ...content,
        content: content.content.map(
          (element, index) =>
            index === itemsCount - 1
              ? { ...element, xs: itemSize + rest }
              : { ...element, xs: itemSize }
        )
      };
    }
    return {
      ...content,
      content: content.content.map(element => resizeItemsById(id, element))
    };
  }
  return content;
};
