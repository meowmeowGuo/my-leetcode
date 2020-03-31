/*
 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 示例 1:
 输入: 121
 输出: true
 示例 2:
 输入: -121
 输出: false
 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  return parseInt(String(x).split('').reverse().join('')) === x;
};

/* 不转换字符串实现 */

const isPalindrome2 = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let power = 10;
  const restArray = [];
  let temp = x;
  do {
    restArray.push(temp % power);
    temp = Math.floor(temp / power);
  } while (temp);
  console.log(parseInt(restArray.reverse().join('')));
  return parseInt(restArray.join('')) === x;
};

/* 不转换字符串2 */
const isPalindrome3 = function (x) {
  let s = 0;
  let x1 = x;
  while (x1 > 0) {
    s = s * 10 + x1 % 10;
    x1 = Math.floor(x1 / 10);
  }
  return s === x;
};

a = 10;
console.log(isPalindrome2(a));
