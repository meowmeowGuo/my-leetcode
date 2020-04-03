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

};

let array = [['aaab', 'a*ab'], ['ab', '.*b'], ['aa', 'a'], ['aa', 'a*'],
  ['ab', '.*'], ['aab', 'a*b*c*'], ['mississippi', 'mis*is*p*.']];
array.forEach(item => {
  console.log('s= ', item[0], 'p= ', item[1]);
  console.log('result= ', isMatch(item[0], item[1]));
  console.log('\n');
});
