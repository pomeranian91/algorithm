function solution(s1, s2) {
  var answer = s1.filter((item) => s2.includes(item)).length;
  return answer;
}
