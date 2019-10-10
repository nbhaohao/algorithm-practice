import { sort } from "./index";

describe("归并算法", () => {
  it("[1]", () => {
    expect(sort([1])).toEqual([1]);
  });
  it("[1, 2]", () => {
    expect(sort([1, 2])).toEqual([1, 2]);
  });
  it("[2, 1, 3]", () => {
    expect(sort([2, 1, 3])).toEqual([1, 2, 3]);
  });
  it("[7, 2, 3, 5,4, 88, 12, 4, 53, 0]", () => {
    expect(sort([7, 2, 3, 5, 4, 88, 12, 4, 53])).toEqual([
      2,
      3,
      4,
      4,
      5,
      7,
      12,
      53,
      88
    ]);
  });

});
