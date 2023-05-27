/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aPointer = a.length - 1;
  let bPointer = b.length - 1;
  let carry = 0;

  let result = '';

  while (aPointer >= 0 || bPointer >= 0 || carry !== 0) {
    const total = +a.charAt(aPointer) + +b.charAt(bPointer) + carry;

    aPointer >= -1 && aPointer--;
    bPointer >= -1 && bPointer--;

    if (total <= 1) {
      result = String(total) + result;
      carry = 0;
      continue;
    }

    carry = 1;
    if (total === 2) {
      result = "0" + result;
      continue;
    }

    result = "1" + result;
  }

  return result;
};

console.log(addBinary("11", "1"))
