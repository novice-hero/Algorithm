// 시간 복잡도: O(n^2) -> 최선과 최악의 경우가 따로 존재하지 않음
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};

console.log(selectionSort([34, 22, 10, 19, 27, 65, 37, 11, 19, 7]));
