/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;
  if (n === 2) return 2;

  const stepResult = {
    0: 0,
    1: 1,
    2: 2,
  };

  for (let i = 3; i <= n; i++) {
    stepResult[i] = stepResult[i - 1] + stepResult[i - 2];
  }

  return stepResult[n];
};


console.log(climbStairs(4))
