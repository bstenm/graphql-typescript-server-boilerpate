import {
      flattenWithForEachLoop,
      flattenWithForLoop,
      flattenWithForOfLoop,
      flattenWithReduce,
} from "./flattenLibs";

const array1 = [2, [3, 4], [5] , 6];
const array2 = [[86, [41, [[31, 5, [[53, 66], 80]], [13, [5, [[[59]], 69, 42]]], 25, [95, 40, 9, 45, 83]]]]];

describe("flattenWithReduce", () => {
      it("Flattens an array of depth 2 with reduce", () => {
            const flattened = flattenWithReduce(array1);
            expect(flattened).toEqual([2, 3, 4, 5, 6]);
      });

      it("Flattens an array of any depth with reduce", () => {
            const flattened = flattenWithReduce(array2);
            expect(flattened).toEqual([86, 41, 31, 5, 53, 66, 80, 13, 5, 59, 69, 42, 25, 95, 40, 9, 45, 83 ]);
      });
});

describe("flattenWithForOfLoop", () => {
      it("Flattens an array of depth 2 with reduce", () => {
            const flattened = flattenWithForOfLoop(array1);
            expect(flattened).toEqual([2, 3, 4, 5, 6]);
      });

      it("Flattens an array of any depth with reduce", () => {
            const flattened = flattenWithForOfLoop(array2);
            expect(flattened).toEqual([86, 41, 31, 5, 53, 66, 80, 13, 5, 59, 69, 42, 25, 95, 40, 9, 45, 83 ]);
      });
});

describe("flattenWithForEachLoop", () => {
      it("Flattens an array of depth 2 with reduce", () => {
            const flattened = flattenWithForEachLoop(array1);
            expect(flattened).toEqual([2, 3, 4, 5, 6]);
      });

      it("Flattens an array of any depth with reduce", () => {
            const flattened = flattenWithForEachLoop(array2);
            expect(flattened).toEqual([86, 41, 31, 5, 53, 66, 80, 13, 5, 59, 69, 42, 25, 95, 40, 9, 45, 83 ]);
      });
});

describe("flattenWithForLoop", () => {
      it("Flattens an array of depth 2 with reduce", () => {
            const flattened = flattenWithForLoop(array1);
            expect(flattened).toEqual([2, 3, 4, 5, 6]);
      });

      it("Flattens an array of any depth with reduce", () => {
            const flattened = flattenWithForLoop(array2);
            expect(flattened).toEqual([86, 41, 31, 5, 53, 66, 80, 13, 5, 59, 69, 42, 25, 95, 40, 9, 45, 83 ]);
      });
});
