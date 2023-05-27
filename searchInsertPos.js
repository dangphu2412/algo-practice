/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let head = 0;
  let tail = nums.length - 1;
  let estimatePos;

  if (target < nums[head]) {
    return 0;
  }

  if (target > nums[tail]) {
    return tail;
  }

  while (head <= tail) {
    estimatePos = head + Math.floor((tail - head) / 2);

    if (target === nums[estimatePos]) {
      return estimatePos;
    }

    if (target > nums[estimatePos]) {
      head = estimatePos + 1;
      continue;
    }

    tail = estimatePos - 1;
  }

  if (typeof estimatePos !== 'undefined') {
    return estimatePos + 1;
  }

  return -1;
};

console.log(searchInsert([1,3,5,6], 6))
