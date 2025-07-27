/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 
// Copy the value of the next node to the current node.
// Adjust the next pointer to skip the next node.

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};