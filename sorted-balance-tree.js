
function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  /**
   * Iterate from the middle
   * Left of middle will be left sub tree
   * Right will be right sub tree
   */

  function buildTree(left, right) {
    if (left > right) return null;

    const middle = Math.ceil((left + right) / 2);

    return new TreeNode(
      nums[middle],
      buildTree(left, middle - 1),
      buildTree(middle + 1, right)
    );
  }

  return buildTree(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))
