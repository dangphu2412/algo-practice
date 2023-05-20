
/**
 * @param {number[]} nums
 */
var removeDuplicates = function(nums) {
  // Iterate over nums
  // if element is new then put into map and also result
  // iterate remaining from size of result to nums length and fill with character
  const existedMap = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!existedMap[nums[i]]) {
      existedMap[nums[i]] = true;
      result.push(nums[i]);
    }
  }

  return result;
};

console.log(removeDuplicates([1,1,2]))
