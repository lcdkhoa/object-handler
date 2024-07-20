const FlattenObjects = ((isArray, wrapped) => {
  const reduce = (path: any, accumulator: any, table: any) => {
    if (isArray(table)) {
      const { length } = table;

      if (length) {
        let index = 0;

        while (index < length) {
          const property = `${path}${index}`;
          const item = table[index];
          index += 1;
          if (wrapped(item) !== item) accumulator[property] = item;
          else reduce(property, accumulator, item);
        }
      } else accumulator[path] = table;
    } else {
      let empty = true;

      if (path) {
        Object.entries(table).forEach(([property, item]) => {
          const prop = `${path}_${property}`;
          empty = false;
          if (wrapped(item) !== item) accumulator[prop] = item;
          else reduce(prop, accumulator, item);
        });
      } else {
        Object.entries(table).forEach(([property, item]) => {
          empty = false;
          if (wrapped(item) !== item) accumulator[property] = item;
          else reduce(property, accumulator, item);
        });
      }

      if (empty) accumulator[path] = table;
    }

    return accumulator;
  };
  return (table: any) => reduce("", {}, table);
})(Array.isArray, Object);

const UnFlatObjects = (json: any, splitKey: string = "_") => {
  const result = {};
  Object.entries(json).forEach(([key, value]) => {
    const parts = key.split(splitKey);
    let current = result;
    parts.forEach((part, i) => {
      const arrayPattern = /^(\D+)(\d+)$/;
      const isArray = arrayPattern.exec(part);
      const isEnd = i === parts.length - 1;
      if (isArray && !isEnd) {
        const arrKey = isArray[1];
        const arrIndex = parseInt(isArray[2]);
        if (!current[arrKey]) {
          current[arrKey] = [];
        }
        if (i === parts.length - 1) {
          current[arrKey][arrIndex] = value;
        } else {
          if (!current[arrKey][arrIndex]) {
            current[arrKey][arrIndex] = {};
          }
          current = current[arrKey][arrIndex];
        }
      } else if (i === parts.length - 1) {
        current[part] = value;
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    });
  });
  return result;
};

export { FlattenObjects, UnFlatObjects };
