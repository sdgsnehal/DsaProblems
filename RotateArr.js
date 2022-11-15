@@ -0,0 +1,43 @@
// Problem Description
// Given an array, rotate the array to the right by K steps, where K is non-negative.

// Input format
// First line contains two space separated integers N and K.

// Second line contains N space separated integers.

// Output format
// N space separated integers of the rotated array on one line.

// Sample Input 1
// 7 3

// 1 2 3 4 5 6 7

// Sample Output 1
// 5 6 7 1 2 3 4

// Explanation 1
// rotate 1 step to the right: [7,1,2,3,4,5,6]

// rotate 2 steps to the right: [6,7,1,2,3,4,5]

// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Constraints
// 1 <= N,K <= 100000

// -10^9 <= A[i] <= 10^9
function rotateArray(n, k, nums) {
  let arr = [];
  k = k % n;
  for (let i = 0; i < n; i++) {
    if (i < k) {
      arr.push(nums[n + i - k]);
    } else {
      arr.push(nums[i - k]);
    }
  }
  let ans = arr.join(" ");
  console.log(ans);
}
