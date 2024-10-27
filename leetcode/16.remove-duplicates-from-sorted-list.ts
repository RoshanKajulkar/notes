// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head; // Handle empty list

  let current: ListNode | null = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // Skip the duplicate node
      current.next = current.next.next;
    } else {
      // Move to the next distinct value
      current = current.next;
    }
  }

  return head;
}
