
function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function isValidPair(left, right) {
    if (left === null && right === null) return true;
    if (!left || !right || left.value !== right.value) return false;

    return isValidPair(left.left, right.right) && isValidPair(left.right, right.left);
  }

  return isValidPair(root.left, root.right);
};

console.log(isSymmetric(new TreeNode(1, new TreeNode(2), new TreeNode(3))));
