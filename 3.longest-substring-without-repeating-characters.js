/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0,
    end = 0,
    max = 0;
  const map = {};
  while (end < s.length) {
    if (map[s[end]] !== undefined) {
      start = Math.max(start, map[s[end]] + 1);
    }
    max = Math.max(max, end - start + 1);
    map[s[end]] = end;
    end++;
  }
  return max;
};
// @lc code=end
