function solution(numbers) {
  var answer = [];
  const setSelected = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      setSelected.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(setSelected)];
  answer = answer.sort((a, b) => a - b);
  return answer;
}
