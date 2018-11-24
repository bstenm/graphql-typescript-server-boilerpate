import { flattenWithReduce } from "./flattenLibs";

const array1 = [2, [3, 4], [5] , 6];
const array2 = [[86, [41, [[31, 5, [[53, 66], 80]], [13, [5, [[[59]], 69, 42]]], 25, [95, 40, 9, 45, 83]]]]];

describe("flattenWithReduce", () => {
      it("Flattens an array of depth 1 with reduce", () => {
            const flattened = flattenWithReduce(array1);
            expect(flattened).toEqual([2, 3, 4, 5, 6]);
      });

      it("Flattens an array of any depth with reduce", () => {
            const flattened = flattenWithReduce(array2);
            expect(flattened).toEqual([86, 41, 31, 5, 53, 66, 80, 13, 5, 59, 69, 42, 25, 95, 40, 9, 45, 83 ]);
      });
});
