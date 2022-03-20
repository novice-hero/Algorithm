# 병합 정렬 (Merge Sort)

## 정의

분할 정복 알고리즘을 사용.
n개의 숫자들을 2개의 부분으로 분할할 수 없을 때까지 분할하고, 각각의 부분을 계속 병합하면서 정렬한다.

<br>

## 과정

<img src="img/mergesort.gif">

<br>

## 시간 복잡도

- **O(n \* log n)**
  - 주어진 데이터(n)들을 완전 분할하기까지 log n개의 호출이 생긴다.
  - 정렬 자체에 필요한 수행시간은 n
  - 따라서 n \* log n
  - 최선이든 최악이든 동일하게 적용된다.

<br>

## 공간 복잡도

- **O(n)**
  - 두 개의 배열을 병합할 때 병합 결과를 담아 놓을 배열이 추가로 필요하다.

<br>

## 장점

- 최선의 경우에도, 최악의 경우에도 O(nlogn)의 시간이 소요되기 때문에 어떠한 경우에도 좋은 성능을 보장받기 때문에 효율적이다.

<br>

## 단점

- 추가 메모리 공간이 필요하다.

<br>

## 코드 구현

```javascript
// 병합
const merge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

// 분할
const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
```
