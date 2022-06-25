const Combination = (arr, num) => {
  const result = [];

  if (num === 1) return arr.map(v => [v]);

  arr.forEach((select, i, origin) => {
    const remainder = origin.slice(i + 1);
    const combination = Combination(remainder, num - 1);
    const combine = combination.map(v => [select, ...v]);
    result.push(...combine);
  });

  return result;
}