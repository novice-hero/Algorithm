# 선택 정렬 (Selection Sort)

## 정의

처음에 원소를 넣을 자리는 정해져 있고, 그 자리에 넣을 원소를 선택하는 알고리즘.

<br>

## 과정

<img src="img/selectionsort.gif">
<br>

## 시간 복잡도

- Best Case, Worst Case: **O(n^2)**
  - (n-1) + (n-2) + .... + 2 + 1 => n(n-1)/2

<br>

## 공간 복잡도

- 주어진 배열 안에서 교환으로 정렬이 되므로 **O(1)**

<br>

## 장점

- 알고리즘이 단순하다.
- 배열 안에서 교환하므로 다른 메모리 공간을 필요로 하지 않는 제자리 정렬이다.
- 안정 정렬이다.

<br>

## 단점

- 비효율적이다.
- 불안정 정렬이다.

<br>

## 코드 구현

```javascript
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
```
