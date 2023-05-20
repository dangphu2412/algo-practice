var longestCommonPrefix = function(strs) {
  let longestPrefix = strs[0];
  let longestLength = longestPrefix.length;

  for (let i = 1; i < strs.length; i++) {
    // Find the shortest slice index
    longestLength = Math.min(longestLength, strs[i].length);
    let traverseLength = longestLength;

    // Guard: Start with diff will stop the iteration
    if (longestPrefix.charAt(0) !== strs[i].charAt(0)) {
      return "";
    }

    while (
      longestPrefix.slice(0, traverseLength) !== strs[i].slice(0, traverseLength)
      && traverseLength > 0
      ) {
      traverseLength--;
    }

    if (traverseLength === 0) {
      return "";
    }

    longestPrefix = longestPrefix.slice(0, traverseLength);
  }

  return longestPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
