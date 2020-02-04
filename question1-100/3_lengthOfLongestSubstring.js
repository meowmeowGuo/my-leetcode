/* 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
*输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
*输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
* */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let res = '';
  let mid = '';
  for (let i of s) {
    const index = mid.indexOf(i);
    mid += i;
    if (index > -1) {
      mid = mid.substr(index + 1);
    }
    if (mid.length > res.length) {
      res = mid;
    }
  }
  return res.length;
};


const s1 = 'abcabcbb';
console.log(lengthOfLongestSubstring(s1));
