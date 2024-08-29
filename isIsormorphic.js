/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  function tokenize(input) {
    let incrementalIdToken = 1;
    let tokennized = "";
    const tokenMap = {};

    for (let i = 0; i < input.length; i++) {
      if (!tokenMap[input.charAt(i)]) {
        tokenMap[input.charAt(i)] = incrementalIdToken;
        incrementalIdToken++;
      }

      tokennized += tokenMap[input.charAt(i)] + '';
    }

    return tokennized;
  }

  return tokenize(s) === tokenize(t);
};


