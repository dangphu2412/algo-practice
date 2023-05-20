/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;
  if (s.length % 2 !== 0) return false;

  const parentthesesPairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const pairQueue = [];

  for (let i = 0; i < s.length; i++) {
    if (parentthesesPairs[s.charAt(i)]) {
      pairQueue.push(parentthesesPairs[s.charAt(i)]);
      continue;
    }

    const toCompared = pairQueue.pop();

    if (!toCompared || toCompared !== s.charAt(i)) {
      return false;
    }
  }

  return pairQueue.length === 0;
};


console.log(isValid('[]'))
