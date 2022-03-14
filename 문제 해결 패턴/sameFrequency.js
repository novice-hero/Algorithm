const sameFrequency = (n1, n2) => {
  const temp1 = {};
  const temp2 = {};

  if (n1.length !== n2.length) return false;

  for (let i of n1.toString()) {
    if (!temp1[i]) {
      temp1[i] = 1;
    } else {
      temp1[i]++;
    }
  }
  for (let i of n2.toString()) {
    if (!temp2[i]) {
      temp2[i] = 1;
    } else {
      temp2[i]++;
    }
  }

  for (let i of n1.toString()) {
    if (temp1[i] !== temp2[i]) return false;
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
