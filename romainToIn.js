/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (!s) {
    return 0;
  }

  const symbolToVal = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!(s.charAt(i) in symbolToVal)) {
      return 0;
    }

    result += symbolToVal[s.charAt(i)];
  }

  return result;
};

console.log(romanToInt('MCMXCIV'));
