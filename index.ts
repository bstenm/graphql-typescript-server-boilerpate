import { flattenDeep } from "lodash";
import { flattenWithForOfLoop, flattenWithReduce } from "./flattenLibs";

const genRandomNbBetween = (from, to) => {
      return Math.floor(Math.random() * to) + from;
};

const generateArray = (maxSize, depth) => {
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
