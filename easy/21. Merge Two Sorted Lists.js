    var mergeTwoLists = function(list1, list2) {
        const result = [list1, ...list2]
       
        return result.flat().sort()
    };
console.log(mergeTwoLists([1,2,3],[1,2,3]));