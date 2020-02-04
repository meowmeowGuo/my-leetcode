/* 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
* 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
* 你可以假设 nums1 和 nums2 不会同时为空
* nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  let mid = len1 + len2 >> 1; // 中位数位置, 取mid mid+1两个
  let i = 0, j = 0, cur;
  let n1, n2;
  while (i < len1 || j < len2) {
    if (j === len2 || nums1[i] < nums2[j]) {
      cur = nums1[i];
      i++;
    } else {
      cur = nums2[j];
      j++;
    }
    if (i + j === mid) {
      n1 = cur;
    }
    if (i + j === mid + 1) {
      n2 = cur;
      break;
    }
  }
  return (len1 + len2) % 2 === 0 ? (n1 + n2) / 2 : n2;
};

const nums1 = [1, 2, 4, 7, 9];
const nums2 = [2, 4, 6, 8];

findMedianSortedArrays(nums1, nums2);
