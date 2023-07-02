function solution(nums) {
  var answer = 0;
  const monsterNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (!monsterNum.includes(nums[i])) {
      monsterNum.push(nums[i]);
    }
  }

  if (monsterNum.length > nums.length / 2) {
    answer = nums.length / 2;
  } else {
    answer = monsterNum.length;
  }

  return answer;
}
