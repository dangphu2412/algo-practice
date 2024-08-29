/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (1 === n) return ['()'];
  if (2 === n) return ['()()', '(())']; // (())() ()(()) (()()) ((())) ()()()

  const based = generateParenthesis(n - 1);

  const results = new Set();

  based.forEach(item => {
    for (let i = 0; i < item.length; i++) {
      if (item.charAt(i) === '(') {
        results.add(item.slice(0, i + 1) + '()' + item.slice(i + 1));
      }
    }

    results.add(`${item}()`);
    results.add(`()${item}`);
  });

  return [...results];
};

console.log(generateParenthesis(3))
// n = 4 - 14
// ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
// n = 3 - 5
// ()()()  ((())) (())() ()(()) (()())
//
// ()()      (()) - 2
// () - 1
