/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const temps1 = nums1.slice(0, m);
  let left = 0;
  let right = 0;
  let index = 0;

  if (n === 0) return;

  while (index < m + n) {
    if (!temps1.length) {
      nums1[index] = nums2[right];
      right++;
      index++;
      continue;
    }

    if (right === n) {
      nums1[index] = temps1[left];
      left++;
      index++;
      continue;
    }

    if (left === m) {
      nums1[index] = nums2[right];
      right++;
      index++;
      continue;
    }

    if (temps1[left] < nums2[right]) {
      nums1[index] = temps1[left];
      left++;
    } else {
      nums1[index] = nums2[right];
      right++;
    }
    index++;
  }
};

const nums1 = [2,0];
const nums2 = [1];
merge(nums1, 1, nums2, 1);

console.log(nums1)
