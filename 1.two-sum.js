/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for (let i=0;i<nums.length;i++) {
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]],i];
    } else {
      map[target-[nums[i]]] = i;
    }
  }
  return [-1, -1];
};
// @lc code=end