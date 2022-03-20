# 삽입 정렬 (Insertion Sort)

## 정의

2번째 원소부터 시작해서 왼쪽 원소들과 비교해서 위치를 지정한 뒤, 지정 위치에 있는 원소를 뒤로 옮기고 삽입하여 정렬하는 알고리즘.

<br>

## 과정

<img src="img/insertionsort.gif">
<br>

## 시간 복잡도

- Best Case: **O(n)**
  - 모두 정렬이 되어있는 경우, 한번씩 밖에 비교를 안하기 때문
- Worst Case: **O(n^2)**
  - (n-1) + (n-2) + ... + 2 + 1 = n(n-1)/2

<br>

## 공간 복잡도

- 주어진 배열 안에서 교환으로 정렬이 되므로 **O(1)**

<br>

## 장점

- 알고리즘이 단순하다.
- 정렬되어 있는 경우, 매우 효율적이다.
- 배열 안에서 교환하므로 다른 메모리 공간을 필요로 하지 않는 제자리 정렬이다.
- 안정 정렬이다.

<br>

## 단점

- 배열의 길이가 길어질수록 비효율적이다.

<br>

## 코드 구현

```javascript
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
```
