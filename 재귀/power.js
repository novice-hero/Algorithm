const power = (n1, n2) => {
  if (n2 === 0) return 1;
  n2--;
  return n1 * power(n1, n2);
};

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
