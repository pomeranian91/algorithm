function solution(num, total) {
  var answer = [];
  const numArray = Array.from({ length: num }, (v, i) => i);
  const numSum = numArray.reduce((a, i) => a + i);
  return numArray.map((item) => item - (numSum - total) / num);
}
