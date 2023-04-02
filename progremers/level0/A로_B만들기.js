function solution(before, after) {
  var answer =
    before.split("").sort().join("") == after.split("").sort().join("") ? 1 : 0;
  return answer;
}
