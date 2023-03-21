function solution(sides) {
  var answer = Math.max(...sides);
  return answer < sides.reduce((a, c) => a + c, 0) - answer ? 1 : 2;
}
