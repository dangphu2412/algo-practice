/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let max = nums[0];

  const maxMap = {
    [max]: 1,
  }

  for (let i = 1; i < nums.length; i++) {
    maxMap[nums[i]] = (maxMap[nums[i]] ?? 0) + 1;

    if (maxMap[nums[i]] > maxMap[max]) {
      max = nums[i];
    }
  }

  return max;
};

console.log(majorityElement([6, 5, 5]))
