function solution(absolutes, signs) {
  var answer = 0;
  signs.forEach((item, index) => {
    if (item) {
      answer += absolutes[index];
    } else if (!item) {
      answer -= absolutes[index];
    }
  });
  return answer;
}
