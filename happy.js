/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  function scan(m, existedMap = { [m] : true}) {
    if (1 === m) return true;
    let total = 0;

    while (m > 0) {
      let digit = m % 10;

      total += Math.pow(digit, 2);
      m = Math.floor(m / 10);
    }

    if (total in existedMap) {
      return false;
    }

    existedMap[total] = true;

    return scan(total, existedMap);
  }

  return scan(n);
};

console.log(isHappy(12));
