/*
 * 归并算法
 * sort(n)
 * merge(a, b)
 * n = 1, sort(n)
 * n = 2, sort(n)
 * n = 3, orderTwoArray(sort(1), sort(2))
 * n = 4, orderTwoArray(sort(2), sort(2))
 * n = 5, orderTwoArray(sort(2), sort(3))
 */

// 正常思路的 merge
const merge = (aArray: Array<number>, bArray: Array<number>): Array<number> => {
  let result: Array<number> = [];
  let aIndex = 0;
  let bIndex = 0;
  while (aIndex < aArray.length || bIndex < bArray.length) {
    if (aIndex >= aArray.length) {
      result.push(bArray[bIndex]);
      bIndex++;
    } else if (bIndex >= bArray.length) {
      result.push(aArray[aIndex]);
      aIndex++;
    } else if (aArray[aIndex] < bArray[bIndex]) {
      result.push(aArray[aIndex]);
      aIndex++;
    } else {
      result.push(bArray[bIndex]);
      bIndex++;
    }
  }
  return result;
};

export const sort = (array: Array<number>): Array<number> => {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  const halfLength = Math.floor(array.length / 2);
  return merge(sort(array.slice(0, halfLength)), sort(array.slice(halfLength)));
  // return inplace_sort(array, 0, array.length);
};

/*
 * 数学思路的 merge
 * merge(a=[], b=[]) b
 * merge(a=[1], b=[]) a
 * merge(a=[], b=[1]) b
 * merge(a=[1], b=[1])
 */
const merge_math = (
  aArray: Array<number>,
  bArray: Array<number>
): Array<number> => {
  if (aArray.length === 0) {
    return bArray;
  }
  if (bArray.length === 0) {
    return aArray;
  }
  return aArray[0] < bArray[0]
    ? [aArray[0]].concat(merge_math(aArray.slice(1), bArray))
    : [bArray[0]].concat(merge_math(bArray.slice(1), aArray));
};

/*
 * 节约内存的 merge
 * */
export const merge_save_memo = (
  aArray: Array<number>,
  start: number,
  middle,
  end: number
): Array<number> => {
  let leftArrayIndex = start;
  let rightArrayIndex = middle;
  while (leftArrayIndex < rightArrayIndex && rightArrayIndex < end) {
    let rightPartMoveStep = 0;
    while (
      aArray[leftArrayIndex] < aArray[rightArrayIndex] &&
      leftArrayIndex < rightArrayIndex
    ) {
      leftArrayIndex++;
    }
    while (
      aArray[rightArrayIndex] <= aArray[leftArrayIndex] &&
      rightArrayIndex < end
    ) {
      rightPartMoveStep++;
      rightArrayIndex++;
    }
    const part = aArray.splice(
      rightArrayIndex - rightPartMoveStep,
      rightPartMoveStep
    );
    aArray.splice(leftArrayIndex, 0, ...part);
    leftArrayIndex += rightPartMoveStep;
    rightArrayIndex += rightPartMoveStep;
  }
  return aArray;
};

/*
 * s: 1   w: 0
 *
 * */

export const inplace_sort = (
  array: Array<number>,
  startIndex: number,
  endIndex: number
): Array<number> => {
  if (endIndex - startIndex <= 1) {
    return array;
  }
  let middle = Math.floor((startIndex + endIndex) / 2);
  inplace_sort(array, startIndex, middle);
  inplace_sort(array, middle, endIndex);
  merge_save_memo(array, startIndex, middle, endIndex);
  return array;
};

// 从下到上的思路的 归并排序
// [99, 1, 2, 4,   5, 66,88, 59]
// size  = 1
//  0, 1, 2
//  2, 3, 4,
//  4, 5, 6,
// size = 2
// 0, 2, 4,
// 4, 6, 8,
const sort_bottom_to_top = (array: Array<number>): Array<number> => {
  for (let size = 1; size < array.length; size *= 2) {
    for (let w = 0; w < array.length; w += size * 2) {
      // merge(array, w, w + size,  w + size *2)
    }
  }
  return [];
};
