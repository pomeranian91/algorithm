function solution(n) {
  var answer = 0;
  const int = Math.sqrt(n);
  if (Number.isInteger(int)) {
    answer = (int + 1) ** 2;
  } else {
    answer = -1;
  }
  return answer;
}
