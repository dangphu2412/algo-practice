/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return false;
  if (s === "") return true;

  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    if (!/[A-Za-z0-9]/.test(s.charAt(head))) {
      head++;
      continue;
    }

    if (!/[A-Za-z0-9]/.test(s.charAt(tail))) {
      tail--;
      continue;
    }

    if (s.charAt(head).toLowerCase() !== s.charAt(tail).toLowerCase()) return false;

    head++;
    tail--;
  }

  return true;
};

console.log(isPalindrome(" "))
