/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let ansList=new ListNode();
        let ansList1=ansList;
        while(list1 && list2)
        {
            if(list1.val >=list2.val)
            {
                ansList.next=list2;
                list2=list2.next;
                ansList=ansList.next;
            }
            else{
                ansList.next=list1;
                list1=list1.next;
                ansList=ansList.next;
            }
        }
        while(list1)
        {
            ansList.next=list1;
                list1=list1.next;
                ansList=ansList.next;
        }
        while(list2)
        {
            ansList.next=list2;
                list2=list2.next;
                ansList=ansList.next;
        }
        return ansList1.next;
    }
}
