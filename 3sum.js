/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);

  const result = [];

  for (let pointer = 0; pointer < nums.length - 2; pointer++) {
    let left = pointer + 1;
    let right = nums.length - 1;

    if (nums[pointer] > 0) {
      break;
    }

    if (pointer > 0 && nums[pointer] === nums[pointer - 1]) {
      continue;
    }

    while (left < right) {
      const total = nums[left] + nums[right] + nums[pointer];
      console.log('total', total, 'pointer', nums[pointer], 'left', nums[left], 'right', nums[right])

      if (total === 0) {
        result.push([nums[pointer], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) {
          console.log('left', nums[left])
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          console.log('right', nums[right])
          right--;
        }
        left++;
        right--;
        console.log('left', nums[left])
        console.log('right', nums[right])
      } else if (total > 0) {
        console.log('< right', nums[right])

        right--;
      } else {
        console.log('> left', nums[left])

        left++;
      }
    }

  }

  return result;
}


const data = [-1,0,1,2,-1,-4]
// [ -4, -1, -1, 0, 1, 2 ]
console.time('threeSum');
console.log(threeSum(data))
console.timeEnd('threeSum');
