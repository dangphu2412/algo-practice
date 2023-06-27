
function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var minDepth = function(root) {
//   function findMin(node, minDept = 0) {
//     if (!node) return minDept;
//
//     if (!node.left && node.right) {
//       return findMin(node.right, minDept + 1);
//     }
//
//     if (!node.right && node.left) {
//       return findMin(node.left, minDept + 1);
//     }
//
//     return Math.min(
//       findMin(node.left, minDept + 1),
//       findMin(node.right, minDept + 1)
//     );
//   }
//
//   return findMin(root);
// };
var minDepth = function(root) {
  const queue = [root];
  let depth = 1;

  while (queue.length) {
    let totalDepthNodes = queue.length;

    while (totalDepthNodes--) {
      const node = queue.shift();

      if (!node?.left && !node?.right) return depth;

      queue.push(...[node.left, node.right].filter(Boolean));
    }

    depth++;
  }

  return depth;
};
const root = new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))));
console.log(minDepth(root)); // 5
