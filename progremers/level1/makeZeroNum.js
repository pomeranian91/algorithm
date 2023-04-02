function solution(nums) {
  var answer = 0;

  const prime = (sum) => {
    if (sum < 2) {
      return true;
    }
    for (let i = 2; i < sum; i++) {
      if (sum % i == 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (prime(sum)) {
          answer++;
        }
      }
    }
  }
  return answer;
}
