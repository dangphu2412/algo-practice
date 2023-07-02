const MIN_INT = -Math.pow(2, 31);
const MAX_INT = Math.pow(2, 31) - 1;

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi =  function atoi(s) {
  let numberQueue = [];

  let isPositive = true;
  let isScanFirstSign = true;
  let isScanningLeadingSpace = true;

  for (let i = 0; i < s.length; i++) {
    if (isScanningLeadingSpace && s.charAt(i) === " ") {
      continue;
    }

    if (isScanningLeadingSpace && s.charAt(i) !== " ") {
      isScanningLeadingSpace = false;
    }

    if (!isScanningLeadingSpace && s.charAt(i) === " ") {
      break;
    }

    if (isScanFirstSign) {
      isScanFirstSign = false;
      isPositive = isPositive = !(s.charAt(i) === "-");

      if (s.charAt(i) === "-" || s.charAt(i) === "+") {
        continue;
      }
    }

    if (!/[0-9]/.test(s.charAt(i))) {
      break;
    }

    numberQueue.push(Number(s.charAt(i)));
  }

  let total = 0;

  for (let i = 0; i < numberQueue.length; i++) {
    const current = total * 10 + numberQueue[i] * (isPositive ? 1 : -1);

    if (current > MAX_INT) return MAX_INT;
    if (current < MIN_INT) return MIN_INT;

    total = current;
  }

  return total;
}

console.log(myAtoi("    +1 234"));

