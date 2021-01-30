/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {   
    if (nums.length == 0) {
        return 0;
    }
    if (nums.length == 1){
        return nums[0];
    } 
    let v = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let currentSum = v;
    for (let i = 1; i + k <= nums.length; ++ i) {
        currentSum = currentSum - nums[i - 1] + nums[i + k - 1];
        v = Math.max(currentSum, v);
    } 
    return v / k;
};
