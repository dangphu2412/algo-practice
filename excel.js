/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let result = "";
  let remaining = columnNumber;

  while (remaining > 0) {
    let divided = remaining % 26;

    if (0 === divided) {
      result = 'Z' + result;
      remaining = Math.floor(remaining / 26) - 1;
      continue;
    }

    result = String.fromCharCode(divided + 64) + result;
    remaining = Math.floor(remaining / 26);
  }

  return result;
};

console.log(convertToTitle(701))
