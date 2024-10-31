// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
): ListNode | null {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA;
}
