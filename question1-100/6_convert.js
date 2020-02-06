/*
* 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
* 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
L   C   I   R
E T O E S I I G
E   D   H   N
* 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
* 请你实现这个将字符串进行指定行数变换的函数：
* string convert(string s, int numRows);
* 示例 1:
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
* 示例 2:
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:
L     D     R
E   O E   I I
E C   I H   N
T     S     G
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows < 1) {
    return '';
  }
  if (numRows === 1) {
    return s;
  }
  // Z字的一横加一斜为一组 tuple
  const d = numRows - 2; // Z字连线上有几个字母
  const tupleLength = numRows + d;
  const tupleTotal = Math.ceil(s.length / tupleLength) + 1;
  let matrix = [];
  let result = '';
  for (let i = 0; i < numRows; i++) {
    matrix[i] = [];
    matrix[i][0] = s[i];
    for (let j = 1; j < tupleTotal; j++) {
      if (i > 0 && i < numRows - 1) {
        matrix[i][2 * j - 1] = s[(tupleLength * j) + i - 2 * i] || '';
        matrix[i][2 * j] = s[tupleLength * j + i] || '';
      } else {
        matrix[i][j] = s[tupleLength * j + i] || '';
      }
    }
    result += matrix[i].join('');
  }
  return result;
};

const s = 'ABCDE';

console.log(convert(s, 4));
