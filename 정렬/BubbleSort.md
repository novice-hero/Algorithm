# 거품 정렬 (Bubble Sort)

## 정의

서로 인접한 두 원소의 크기를 비교하고, 조건에 맞지 않는다면 자리를 교환하며 정렬하는 알고리즘.

<br>

## 과정

![Alt Text](https://github.com/GimunLee/tech-refrigerator/raw/master/Algorithm/resources/bubble-sort-001.gif)
<br>
<span style="font-size:60%">출처: https://github.com/GimunLee/tech-refrigerator/blob/master/Algorithm/resources/bubble-sort-001.gif</span>

<br>

## 시간 복잡도

- Best Case: O(n) - 개선된 거품 정렬
- Worst Case: O(n^2)

<br>

## 공간 복잡도

- 주어진 배열 안에서 교환으로 정렬이 되므로 O(n).

<br>

## 장점

- 구현이 매우 간단하다.
- 배열 안에서 교환하므로 다른 메모리 공간을 필요로 하지 않는 제자리 정렬이다.
- 안정 정렬이다.

<br>

## 단점

- 그다지 효율적이지 못하다.
- 교환 연산이 많다.

<br>

## 코드 구현

```JavaScript
// 개선된 Bubble Sort
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
```
