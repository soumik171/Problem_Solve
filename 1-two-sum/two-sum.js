/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash={};
    for(let i=0;i<nums.length;i++){
        let rem=target-nums[i];
        if(hash.hasOwnProperty(rem)){
            return [hash[rem],i];
        }
        hash[nums[i]]=i;
    }
    return -1;
};