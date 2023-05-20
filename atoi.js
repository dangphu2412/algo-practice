/**
 *
 * @param {string} s
 * Ignore leading white space. For example: ___12
 * Consider negative: +, -. There is no character start -> +
 * Next character is non-digit then stop
 */

const MIN_INT = -Math.pow(2, 31);
const MAX_INT = Math.pow(2, 31) - 1;


function atoi(s) {
  s = s.trimStart();

  const flag = !s.startsWith('-') ? 1 : -1;
  const startIndex = ['+', '-'].includes(s[0]) ? 1 : 0;

  let result = 0;

  for (let i = startIndex; i < s.length; i++) {
    const scanningChar = s.charAt(i);

    if (!/[0-9]/.test(scanningChar)) {
      break;
    }

    result = result * 10 + Number(scanningChar);
  }


  if (result > MAX_INT) {
    return MAX_INT;
  }

  if (result < MIN_INT) {
    return MIN_INT;
  }

  return result * flag;
}


module.exports = atoi

