function removeDuplicates(nums) {
    if (!nums.length) {
        return 0; 
    }

    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1; 
}
