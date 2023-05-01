function solution(numbers, n) {
  var answer = 0;

  numbers.forEach((item) => {
    if (answer <= n) {
      answer += item;
    }
  });
  return answer;
}
