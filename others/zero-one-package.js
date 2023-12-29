/*
 * @Author: Hong.Zhang
 * @Date: 2023-12-29 17:05:03
 * @Description: 
 */
function zeroOnePackage(count, maxPrice, weight, price) {
  const dp = new Array(count + 1)
    .fill()
    .map(() => new Array(maxPrice + 1).fill(0));

  for (let i = 0; i < count; i++) {
    for (let j = 0; j <= maxPrice; j++) {
      let choose = 0;
      if (j - weight[i] >= 0) {
        if (i - 1 < 0) {
          choose = price[i];
        } else {
          choose = arr[i - 1][j - [weight[i]]] + price[i];
        }
      }

      let noChoose = 0;
      if (dp[i - 1] && dp[i - 1][j] !== undefined) {
        noChoose = dp[i - 1][j];
      }
      dp[i][j] = Math.max(choose, noChoose);
    }
  }
  return dp[(count - 1, maxPrice)];
}