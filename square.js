/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0;
  if (x === 1) return 1;

  let head = 0;
  let tail = x;

  while (head <= tail) {
    const mid = Math.floor((head + tail) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    }

    if (square < x) {
      head  = mid + 1;
    } else {
      tail = mid - 1;
    }
  }

  return head - 1;
};

console.log(mySqrt(123098))
