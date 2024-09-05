function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head;
  let next = current?.next;

  while (next) {
    const nextTemp = next?.next;

    next.next = current;

    current = next;
    next = nextTemp;

    if (nextTemp === null) {
      break;
    }
  }

  if (head?.next) {
    head.next = null;
  }

  return current;
};

console.log(reverseList(new ListNode(5, new ListNode(4))))

