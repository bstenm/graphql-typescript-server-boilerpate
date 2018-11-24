
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

/**
 * Flattens an array of any depth with regular for loop (USUALLY THE MOST PERFORMANT)
 * @param array - the array to flatten
 * @param flattened - to hold the resulting flattened array
 * @return - the resulting flattened array
 */
export const flattenWithForLoop = (array: any[], flattened: any[] = []): any [] => {
      for (let i = 0; i < array.length; i++) {
            const value = array[i];
            if (Array.isArray(value)) {
                  flattened = flattenWithForLoop(value, flattened);
            } else {
                  flattened.push(value);
            }
      }
      return flattened;
};

/**
 * Flattens an array of any depth with forEach loop
 * @param array - the array to flatten
 * @param flattened - to hold the resulting flattened array
 * @return - the resulting flattened array
 */
export const flattenWithForEachLoop = (array: any[], flattened: any[] = []): any [] => {
      array.forEach((value) => {
            if (Array.isArray(value)) {
                  flattened = flattenWithForEachLoop(value, flattened);
            } else {
                  flattened.push(value);
            }
      });
      return flattened;
};

/**
 * Flattens an array of any depth with the ES6 for-of loop
 * @param array - the array to flatten
 * @param flattened - to hold the resulting flattened array
 * @return - the resulting flattened array
 */
export const flattenWithForOfLoop = (array: any[], flattened: any[] = []): any [] => {
      for (const value of array) {
            if (Array.isArray(value)) {
                  flattened = flattenWithForOfLoop(value, flattened);
            } else {
                  flattened.push(value);
            }
      }
      return flattened;
};
