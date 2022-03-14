// 객체 사용 빈도 수 세기

function validAnagram(arr1, arr2) {
  const temp1 = {};
  const temp2 = {};

  if (arr1.length !== arr2.length) return false;

  for (let i of arr1) {
    !temp1[i] ? (temp1[i] = 1) : temp1[i]++;
  }
  for (let i of arr2) {
    !temp2[i] ? (temp2[i] = 1) : temp2[i]++;
  }

  for (let i of arr1) {
    if (temp1[i] !== temp2[i]) return false;
  }

  return true;
}
