const Permutation = (arr, num) => {
  const result = [];

  if (num === 1) return arr.map(v => [v]);

  arr.forEach((select, i, origin) => {
    const remainder = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const permutation = Permutation(remainder, num - 1);
    const combine = permutation.map(v => [select, ...v]);
    result.push(...combine);
  });

  return result;
}