/* 1. 两数之和
* 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
* 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
* 示例:
* 给定 nums = [2, 7, 11, 15], target = 9
* 因为 nums[0] + nums[1] = 2 + 7 = 9
* 所以返回 [0, 1]
* */
const twoSum = function (nums, target) {
  let firstIndex, secondIndex;
  for (let i in nums) {
    let rest = target - nums[i];
    let j = nums.indexOf(rest);
    if (j > -1 && j != i) {
      firstIndex = parseInt(i);
      secondIndex = parseInt(j);
      break;
    }
  }
  if (firstIndex > -1 && secondIndex > -1) {
    return [firstIndex, secondIndex];
  } else {
    return [];
  }
};

a = [3, 2, 4];
target = 6;
console.log(twoSum(a, 6));
