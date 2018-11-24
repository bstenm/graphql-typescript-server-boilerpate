import { flattenDeep } from "lodash";
import { flattenWithForOfLoop, flattenWithReduce } from "./flattenLibs";

/**
 * Returns a number between 1st arguments and (but not including) the 2nd arguments
 * @param from - the lowest number possible
 * @param to - the highest number possible + 1
 * @return - the random number
 */
const genRandomNbBetween = (from: number, to: number): number => {
      return Math.floor(Math.random() * to) + from;
};

/**
 * Generates a nested array of random numbers between 0 and 100
 * @param maxSize - the maximum length of any nested array generated
 * @param depth - the maximum depth of the resulting array
 * @return - the rsulting nested array
 */
const generateArray = (maxSize: number, depth: number): any[] => {
      const size = genRandomNbBetween(1, maxSize);
      return Array.from(Array(maxSize), () => {
            // 75% chance of being nested
            const nested = genRandomNbBetween(0, 4);
            if (nested && depth > 1) {
                  return generateArray(maxSize, depth - 1);
            }
            return Math.round(Math.random() * 100);
      });
};

const a = generateArray(2, 2);

console.log("Array to flatten:", JSON.stringify( a));

const result1 = flattenWithReduce(a);
const result2 = flattenWithForOfLoop(a);

console.log("With Reduce", result1);
console.log("With For-Of Loop", result2);
console.log("With Lodash", flattenDeep(a));
