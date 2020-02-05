/* 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
* 输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
* 输入: "cbbd"
输出: "bb"
* */
/*
* 马拉车算法
* 参考链接：https://www.cnblogs.com/love-yh/p/7072161.html
* */
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (!s) {
    return '';
  }
  if (s === s.split('').reverse().join('')) {
    return s;
  }
  const T = `#${s.split('').join('#')}#`;
  let P = [];
  let id = 0; // 已找到的回文子串的中间位置
  let mx = 0; // 已找到的回文子串的最右端
  for (let i = 0; i < T.length; i++) {
    if (id && i > id && i < mx && P[2 * id - i] < mx - i) {
      P[i] = Math.min(mx - i + 1, P[2 * id - i]);
    } else {
      id = 0;
      mx = 0;
      for (let j = i + 1; j < T.length && 2 * i - j >= 0; j++) {
        if (T[j] !== T[2 * i - j]) {
          break;
        } else {
          id = i;
          mx = j;
        }
      }
      P[i] = (mx - id) * 2;
    }
  }
  const max = Math.max(...P);
  const maxIndex = P.indexOf(max);
  return (T.substring(maxIndex - max / 2, maxIndex + max / 2)).replace(/#/g, '');
};

const s = 'cba';
const s2 = 'bananas';
console.log(longestPalindrome(s));
