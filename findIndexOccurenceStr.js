/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) return -1;
  if (!haystack || !needle) return -1;

  let head = 0;
  let compareHead = 0;

  while (head < haystack.length) {
    if (haystack.charAt(head) !== needle.charAt(compareHead)) {
      compareHead = 0;
      head++;
      continue;
    }

    if (compareHead === needle.length - 1) {
      return head - compareHead;
    }

    compareHead++;
    head++;
  }

  return -1;
};

console.log(strStr('mississippi', 'issip'));
