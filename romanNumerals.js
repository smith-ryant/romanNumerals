function toRoman(num) {
  const romanNumerals = [
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ];

  let result = "";

  for (let [roman, value] of romanNumerals) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}
console.log(toRoman(789));
