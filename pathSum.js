 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  function isNodePathEqual(node, sum = 0) {
    if (!node) return false;

    const newSum = sum + node.val;
    if (newSum === targetSum && !node.left && !node.right) return true;

    return (node.left && isNodePathEqual(node.left, newSum)) || (node.right && isNodePathEqual(node.right, newSum));
  }

  if (!root) return false;

  return !!isNodePathEqual(root);
};

console.log(hasPathSum(new TreeNode(1, new TreeNode(2)), 1)); // false
