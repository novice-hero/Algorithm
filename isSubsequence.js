const isSubsequence = (str1, str2) => {
  if (!str1) return true;

  let str1_cnt = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[str1_cnt] === str2[i]) {
      str1_cnt++;
    }
  }
  return str1_cnt === str1.length ? true : false;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "string")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
