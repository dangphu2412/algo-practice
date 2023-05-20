/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // First: A con B
  // sec: A not related to B (/)
  // Third: A related to B
  if ((!nums1?.length && !nums2?.length)) { return 0; }

  const isNotRelated = nums1[nums1.length - 1] < nums2[0] || nums1[0] > nums2[nums2.length - 1];
  const isChildCase = (nums1[nums1.length - 1] < nums2[nums2.length - 1] && nums1[0] > nums2[0])
    || (nums1[nums1.length - 1] > nums2[nums2.length - 1] && nums1[0] < nums2[0])

  if (isNotRelated) {
    const total = nums1.concat(nums2).sort();

    return calcMed(total);
  }

  if (isChildCase) {
    if ((nums1[nums1.length - 1] < nums2[nums2.length - 1] && nums1[0] < nums2[0])) {
      return calcMed(nums2);
    }

    return calcMed(nums1);
  }

  const mergedArr = [...new Set([...nums1, ...nums2])].sort();

  return calcMed(mergedArr);
};

function calcMed(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length % 2 === 0) {
    return (arr[Math.floor((arr.length - 1) / 2)] + arr[Math.floor((arr.length) / 2)]) / 2;
  }

  return arr[Math.floor((arr.length / 2))] / 2;
}

console.log(findMedianSortedArrays([1], [2]));

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

};

