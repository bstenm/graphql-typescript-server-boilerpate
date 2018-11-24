"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Flattens an array of any depth with reduce
 * @param array - the array to flatten
 * @param flattened - to hold the resulting flattened array
 * @return - the resulting flattened array
 */
exports.flattenWithReduce = (array, flattened = []) => {
    return array.reduce((acc, value) => {
        if (Array.isArray(value)) {
            return exports.flattenWithReduce(value, acc);
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
exports.flattenWithForLoop = (array, flattened = []) => {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (Array.isArray(value)) {
            flattened = exports.flattenWithForLoop(value, flattened);
        }
        else {
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
exports.flattenWithForEachLoop = (array, flattened = []) => {
    array.forEach((value) => {
        if (Array.isArray(value)) {
            flattened = exports.flattenWithForEachLoop(value, flattened);
        }
        else {
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
exports.flattenWithForOfLoop = (array, flattened = []) => {
    for (const value of array) {
        if (Array.isArray(value)) {
            flattened = exports.flattenWithForOfLoop(value, flattened);
        }
        else {
            flattened.push(value);
        }
    }
    return flattened;
};
//# sourceMappingURL=flattenLibs.js.map