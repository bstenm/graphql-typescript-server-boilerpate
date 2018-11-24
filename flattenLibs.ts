
export const  flattenWithReduce = (array, flattened = []) => {
      return array.reduce((acc, value) => {
            if (Array.isArray(value)) {
                  acc = flattenWithReduce(value, acc);
                  return acc;
            }
            return acc.concat(value);
      }, flattened);
};

export const flattenWithForOfLoop = (array, flattened = []) => {
      for (const value of array) {
            if (Array.isArray(value)) {
                  flattened = flattenWithForOfLoop(value, flattened);
            } else {
                  flattened = flattened.concat(value);
            }
      }
      return flattened;
};
