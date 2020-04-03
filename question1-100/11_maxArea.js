/*
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 说明：你不能倾斜容器，且 n 的值至少为 2。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  const n = height.length;
  let maxArea = 0;
  if (n < 2) {
    return 0;
  }
  let low = 0, high = height.length - 1;
  while (low < high) {
    if (height[low + 1] >= height[low]) {
      low++;
    } else {
      break;
    }
  }
  while (high > low) {
    if (height[high - 1] >= height[high]) {
      high--;
    } else {
      break;
    }
  }
  // low 等于 high 时取两边最高的一根作为另一边计算容量
  if (low === high) {
    if (low - 1 && high + 1) {
      if (height[low - 1] > height[high + 1]) {
        low--;
      } else {
        high++;
      }
    } else {
      low = low - 1 > -1 ? low - 1 : low;
      high = high + 1 < height.length ? high + 1 : high;
    }
  }
  maxArea = (high - low) * Math.min(height[low], height[high]);
  while (low >= 0) {

  }
};


// height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// height = [1, 8, 7];
// height = [2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2];
height = [1, 2, 4, 3];


console.log(maxArea(height));
