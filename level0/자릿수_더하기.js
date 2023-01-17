function solution(n) {
  var answer = [...("" + n)].map((item) => +item).reduce((a, b) => a + b);
  return answer;
}
