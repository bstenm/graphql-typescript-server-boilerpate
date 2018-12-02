import { flattenWithForOfLoop, flattenWithReduce } from "./flattenLibs";

const array1 = [2, 3, 4, "string1", 6];
const array2 = [[86, [41, [[31, "string1", [[53, 66], 80]], [13, [5, [[[59]], 69, { a: "b" }]]], 25, [95, 40, 83]]]]];
const array2Flattened = [86, 41, 31, "string1", 53, 66, 80, 13, 5, 59, 69, { a: "b" }, 25, 95, 40, 83];

describe("flattenWithReduce", () => {
      it("Returns a non-nested array unchanged", () => {
            const flattened = flattenWithReduce(array1);
            expect(flattened).toEqual([2, 3, 4, "string1", 6]);
      });

      it("Flattens an array of any depth with reduce", () => {
            const flattened = flattenWithReduce(array2);
            expect(flattened).toEqual(array2Flattened);
      });
});

describe("flattenWithForOfLoop", () => {
      it("Returns a non-nested array unchanged", () => {
            const flattened = flattenWithForOfLoop(array1);
            expect(flattened).toEqual([2, 3, 4, "string1", 6]);
      });

      it("Flattens an array of any depth with for-of loop", () => {
            const flattened = flattenWithForOfLoop(array2);
            expect(flattened).toEqual(array2Flattened);
      });
});
