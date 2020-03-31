/*
 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 '.' 匹配任意单个字符
 '*' 匹配零个或多个前面的那一个元素
 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 * */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  if (p === s) {
    return true;
  } else if (p === '.*') {
    return true;
  } else if (!p.includes('*') && !p.includes('.')) {
    // p!==s 且 p 既不包含 '*' 也不包含 '.'
    return false;
  } else {
    let sIndex = 0;
    for (let i = 0; i < p.length; i++) {
      if (p[0] === '*') {
        continue;
      }
      if (p[i] === '.') {
        sIndex += 1;
      } else if (p[i] === '*' && i - 1 > -1) {
        for (let j = sIndex; j < s.length; j++) {
          if (p[i - 1] === '.') {
            sIndex += 1;
          }
          if (s[j] === p[i - 1]) {
            sIndex += 1;
          } else {
            break;
          }
        }
      } else if (p[i] === s[sIndex]) {
        sIndex += 1;
      } else if (i - 1 > -1 && i - 2 > -1 && p[i - 1] === '*' && p[i - 2] === p[i]) {
        sIndex += 1;
      }
    }
    return sIndex === s.length;
  }
};

let array = [['aaab', 'a*ab'], ['ab', '.*c'], ['aa', 'a'], ['aa', 'a*'],
  ['ab', '.*'], ['aab', 'a*b*c*'], ['mississippi', 'mis*is*p*.']];
array.forEach(item => {
  console.log('s= ', item[0], 'p= ', item[1]);
  console.log('result= ', isMatch(item[0], item[1]));
  console.log('\n');
});
