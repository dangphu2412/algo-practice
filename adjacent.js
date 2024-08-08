/**
 * @param {number[][]} grid
 */
var neighborSum = function (grid) {
  this.grid = grid;
  this.valueToLocate = grid.reduce((map, curr, y) => {
    curr.forEach((value, x) => {
      map[value] = [x, y];
    });
    return map;
  }, {});
  this.maxY = grid.length;
  this.maxX = grid[0].length;
};

/**
 * @param {number} value
 * @return {number}
 */
neighborSum.prototype.adjacentSum = function (value) {
  const locate = this.valueToLocate[value];

  if (locate === undefined) return 0;

  const [x, y] = locate;
  let sum = 0;
  for (let i = Math.max(x - 2, 0); i <= Math.min(x + 2, this.maxX); i += 2) {
    for (let j = Math.max(y - 2, 0); j <= Math.min(y + 2, this.maxY); j += 2) {
      if (i === x && j === y) continue;
      if (this.grid[j]?.[i] !== undefined) {
        sum += this.grid[j][i];
      }
    }
  }

  return sum;
};

/**
 * @param {number} value
 * @return {number}
 */
neighborSum.prototype.diagonalSum = function (value) {
  const locate = this.valueToLocate[value];

  if (locate === undefined) return null;

  const [x, y] = locate;
  let sum = 0;

  for (let i = Math.max(x - 2, 0); i <= Math.min(x + 1, this.maxX); i += 2) {
    for (let j = Math.max(y - 2, 0); j <= Math.min(y + 1, this.maxY); j += 2) {
      if (i === x && j === y) continue;
      if (this.grid[j]?.[i] !== undefined) {
        sum += this.grid[j][i];
      }
    }
  }

  return sum;
};

var obj = new neighborSum([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]);
console.log(obj.adjacentSum(1));
