/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  const cachedRowIndex = [undefined, [1, 1]];

  for (let scanningIndexRow = 2; scanningIndexRow <= rowIndex; scanningIndexRow++) {
    const result = [1];

    for (let colOfRow = 1; colOfRow < scanningIndexRow; colOfRow++) {
      result.push(cachedRowIndex[scanningIndexRow - 1][colOfRow - 1] + cachedRowIndex[scanningIndexRow - 1][colOfRow]);
    }

    result.push(1);
    cachedRowIndex[scanningIndexRow] = result;
    cachedRowIndex[scanningIndexRow - 1] = undefined;
  }

  return cachedRowIndex[rowIndex];
};

console.log(getRow(5)); // [1, 3, 3, 1]
