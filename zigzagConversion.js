/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let isHighway = false;
  const buckets = new Array(numRows).fill("");
  let cuttingEdge = 0;
  let counter;

  for (let i = 0; i < s.length; i++) {
    if (cuttingEdge === i) {
      isHighway = !isHighway;
      cuttingEdge = cuttingEdge + numRows - 1;
      counter = isHighway ? 0 : numRows - 1;
    }

    if (buckets[counter] !== undefined) {
      buckets[counter] += s.charAt(i);
    }

    if (isHighway) counter++
    if (!isHighway) counter--
  }

  return buckets.filter(Boolean).join("");
};

console.log(convert("AB", 1)); // PAHNAPLSIIGYIR
// P   A
// A P L
// Y   I
