/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x);
    const len = str.length;
    for (let i=0;i<len/2;i++) {
      if (str[i] !== str[len-1-i]) {
        return false;
      }
    }
    return true;
};
// @lc code=end

