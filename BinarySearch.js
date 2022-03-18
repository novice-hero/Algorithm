// 이진 검색 구현
const binarySearch = (arr, n) => {
  // 정렬된 배열을 받는다는 전제
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== n && start <= end) {
    n > arr[mid] ? (start = mid + 1) : (end = mid - 1);
    mid = Math.floor((end + start) / 2);
  }
  return arr[mid] === n ? mid : -1;
};
