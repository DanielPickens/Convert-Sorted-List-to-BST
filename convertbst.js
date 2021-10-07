const sortedListToBST = function(head) {
       if (head == null) return null;
        return helper(head, null);
    }
    
    var helper = function( start, end) {
        if (start == end) return null;
        
        let mid = findMid(start, end);

       let rightHead = mid.next;
        let root = new TreeNode(mid.val);
        
        root.left =  helper(start, mid);
        root.right = helper(mid.next, end);
        return root;
    }
    
    let findMid = function( start,  end) {
        let fast = start;
        let slow = start;
        while (fast != end && fast.next != end) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }



/*
Success
Details 
Runtime: 88 ms, faster than 93.05% of JavaScript online submissions for Convert Sorted List to Binary Search Tree.
Memory Usage: 43.8 MB, less than 50.99% of JavaScript online submissions for Convert Sorted List to Binary Search Tree.
*/
