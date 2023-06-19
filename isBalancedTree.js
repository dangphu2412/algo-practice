function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  function findMax(node, max = 0) {
    if (!node) return max;

    const maxLeft = findMax(node?.left, max + 1);
    const maxRight = findMax(node?.right, max + 1);

    if (Math.abs(maxLeft - maxRight) > 1) throw new Error('Not balanced');

    return Math.max(maxLeft, maxRight);
  }

  try {
    return findMax(root) >= 1;
  } catch {
    return false;
  }
};

console.log(isBalanced(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))); // true
console.log(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2)))); // false
