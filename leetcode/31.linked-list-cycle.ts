// https://leetcode.com/problems/linked-list-cycle/description/

// Cycle Detection Method: Uses Floyd's Cycle-Finding Algorithm (also known as the "Tortoise and Hare" approach) to detect a cycle in a linked list.
// Pointer Mechanics: A "slow" pointer advances by one node, while a "fast" pointer advances by two nodes.
// Cycle Condition: If the fast pointer eventually meets the slow pointer, a cycle exists in the linked list.
// No Cycle Condition: If the fast pointer reaches the end (null), the list has no cycle.
// Efficiency: This approach has O(n) time complexity and O(1) space complexity, making it optimal for cycle detection in linked lists.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next!;
    fastPtr = fastPtr.next.next!;

    if (slowPtr === fastPtr) {
      return true;
    }
  }

  return false;
}
