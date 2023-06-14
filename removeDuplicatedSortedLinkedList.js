
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let tail = head;
  let traverse = head;

  while (traverse) {
    if (traverse.val !== tail.val) {
      tail.next = traverse;
      tail = tail.next;
    }

    traverse = traverse.next;
  }

  tail.next = null;

  return head;
};

console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))));
