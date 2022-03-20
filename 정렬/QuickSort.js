const pivot = (arr, start = 0, end = arr.length - 1) => {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let pivot = arr[start]; // 가장 왼쪽을 기준으로 함
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }
  swap(arr, start, pivotIdx);

  return pivotIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // pivot은 고정이기 때문에 pivot에 -1, +1
    quickSort(arr, left, pivotIdx - 1); // left
    quickSort(arr, pivotIdx + 1, right); // right
  }
  return arr;
};

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
