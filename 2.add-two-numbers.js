/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var append = function (lastNode, element) {
  const newNode = {
    val: element,
    next: null,
  };
  lastNode.next = newNode;
  return newNode;
};

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const headNode = {
    val: -1,
    next: null,
  };
  let nextNode = headNode;
  while (l1 || l2) {
    const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
    const remainder = sum % 10;
    carry = Math.floor(sum / 10);
    nextNode = append(nextNode, remainder);
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (carry === 1) {
    append(nextNode, 1)
  }
  return headNode.next;
};
// @lc code=end
