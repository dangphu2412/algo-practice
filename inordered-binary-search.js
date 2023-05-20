
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root?.val) {
    return [];
  }

  if (!root.left && !root.right ) {
    return [root.val];
  }

  const result = [];

  traverse(root, result);

  return result;
};
/**
 * @param {TreeNode} root
 * @param {number[]} result
 * @return void
 */
function traverse(root, result) {
  if (!root) {
    return;
  }

  traverse(root.left, result);
  result.push(root.val);
  traverse(root.right, result);
}

// {"val":1,"left":null,"right":{"val":2,"left":{"val":3,"left":null,"right":null},"right":null}}

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null))
console.log(inorderTraversal(tree));
