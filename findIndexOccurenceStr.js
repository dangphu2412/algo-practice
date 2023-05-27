/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    console.log('Slicing: ', i, needle.length, ' ', haystack.slice(i, needle.length));
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;

  // haystack.indexOf(needle);
};

console.log(strStr('hello', 'll'));
