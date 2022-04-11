function solution(s) {
  var answer = "";
  const evenMiddle = s.length / 2;
  const oddMiddle = Math.ceil(s.length / 2) - 1;
  if (s.length % 2 == 0) {
    answer = s.split("")[oddMiddle] + s.split("")[evenMiddle];
  } else {
    answer = s.split("")[oddMiddle];
  }
  return answer;
}
