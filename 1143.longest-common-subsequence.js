/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * 
 * dp[i, j] = 
 *  1. text1[i] === text2[j]: dp[i-1, j-1] + 1;
 *  2. text1[i] !== text2[j]: max(dp[i-1, j], dp[i, j-1] )
 */
var longestCommonSubsequence = function (text1, text2) {
  const length1 = text1.length;
  const lenght2 = text2.length;
  const dp = new Array(length1).fill().map(() => new Array(lenght2).fill(0))
  for (let j = 0; j < lenght2; j++) {
    if (text2.substring(0, j+1).includes(text1[0])) {
      dp[0][j] = 1;
    }
  }
  for (let i = 0; i < length1; i++) {
    if (text1.substring(0, i+1).includes(text2[0])) {
      dp[i][0] = 1;
    }
  }
  
  for (let i = 1; i < length1; i++) {
    for (let j = 1; j < lenght2; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[length1 - 1][lenght2 - 1];
};

// longestCommonSubsequence('abcde', 'ace');
// @lc code=end

