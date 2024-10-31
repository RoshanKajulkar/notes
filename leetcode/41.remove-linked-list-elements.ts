// https://leetcode.com/problems/remove-linked-list-elements/

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0); // Create a dummy node
  dummy.next = head; // Point dummy to the original head
  let curr = dummy; // Start with the dummy node

  while (curr.next) {
    if (curr.next.val === val) {
      // Skip the node with the target value
      curr.next = curr.next.next;
    } else {
      // Move to the next node if no removal
      curr = curr.next;
    }
  }

  return dummy.next; // Return the new head, skipping the dummy node
}
