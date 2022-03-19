const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let idx = i - 1;
    while (idx >= 0 && arr[idx] > curVal) {
      arr[idx + 1] = arr[idx];
      idx--;
    }
    arr[idx + 1] = curVal;
  }
  return arr;
};

console.log(insertionSort([34, 22, 10, 19, 27, 65, 37, 11, 19, 7]));
