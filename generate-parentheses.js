/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (1 === n) return ['()'];

  return [
    ...generateParenthesis(n - 1)
      .reduce((res, item) => {
          res.add(`(${item})`);
          res.add(`${item}()`);
          res.add(`()${item}`);

          return res;
        }, new Set())
      .values()
  ];
};

console.log(generateParenthesis(3))
// n = 4 - 14
// ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
// n = 3 - 5
// ()()()  ((())) (())() ()(()) (()())
//
// ()()      (()) - 2
// () - 1
