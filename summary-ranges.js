/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const ranges = [];
  let pointer = null;

  for (let i = 0; i < nums.length; i++) {
    if (null === pointer) {
      pointer = nums[i];
    }

    if (1 === nums[i + 1] - nums[i]) {
      continue;
    }

    if (pointer === nums[i]) {
      ranges.push(`${pointer}`)
    } else {
      ranges.push(`${pointer}->${nums[i]}`)
    }

    pointer = null;
  }

  return ranges;
};

console.log(summaryRanges([0,1,2,4,5,7]))
