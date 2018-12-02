
/**
 * Flattens an array of any depth with the ES6 for-of loop (MOST PERFORMANT)
 * @param array - the array to flatten
 * @param flattened - to hold the resulting flattened array
 * @return - the resulting flattened array
 */
export const flattenWithForOfLoop = (array: any[], flattened: any[] = []): any [] => {
      for (const value of array) {
            if (Array.isArray(value)) {
                  flattenWithForOfLoop(value, flattened);
            } else {
                  flattened.push(value);
            }
      }
      return flattened;
};

/**
 * Flattens an array of any depth with reduce
 * @param array - the array to flatten
 * @param flattened - to hold the resulting flattened array
 * @return - the resulting flattened array
 */
export const  flattenWithReduce = (array: any[], flattened: any[] = []): any[] => {
      return array.reduce((acc, value) => {
            if (Array.isArray(value)) {
                  return flattenWithReduce(value, acc);
            }
            return acc.concat(value);
      }, flattened);
};
