 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head?.next) return true;

  const stack = [head.val];
  let node = head.next;
  let isBack = false;

  while (node) {
    if (!stack.length && node) return false;

    if (stack[stack.length - 1] === node.val) {
      isBack = true;
    }

    if (stack[stack.length - 1] === node?.next?.val) {
      isBack = true;
      node = node.next;
      continue;
    }

    if (isBack) {
      const pair = stack.pop();
      if (pair !== node.val) {
        return false;
      }
    } else {
      stack.push(node.val);
    }

    node = node.next;

  }

  if (!isBack) return false;
  if (stack.length) return false;

  return true;
};


console.log(isPalindrome(
  new ListNode(1, new ListNode(0, new ListNode(1, new ListNode(1))))));
