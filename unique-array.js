
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // Remove duplicated values in nums and move the pointer of not duplicated element to the next position
  // -> use 1 pointer to traverse, 1 pointer to track the non-duplicate index
  // return duplicated counter
  if (!nums) return 0;
  if (nums.length === 1) return 1;

  let head = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i+1]) {
      head++;
      nums[head] = nums[i+1];
    }
  }

  for (let i = head; i < nums.length; i++) {
    nums[i] = NaN;
  }

  return head;
};
const input = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(input))
console.log(input)
