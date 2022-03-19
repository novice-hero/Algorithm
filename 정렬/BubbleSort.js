// 시간 복잡도: 최선 O(n), 최악 O(n^2)
const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

console.log(bubbleSort([5, 6, 2, 7, 1, 8, 0, 4, 12, 14, 87, 9, 10]));
