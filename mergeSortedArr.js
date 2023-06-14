/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let scanner = m + n - 1;
  m--;
  n--;

  while (scanner >= 0) {
    if (n < 0 || nums1[m] >= nums2[n]) {
      nums1[scanner] = nums1[m];
      m--;
    } else {
      nums1[scanner] = nums2[n];
      n--;
    }

    scanner--;
  }
};

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
merge(nums1, 3, nums2, 3);

console.log(nums1)
