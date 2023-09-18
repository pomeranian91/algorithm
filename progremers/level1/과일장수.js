function solution(k, m, score) {
  let answer = 0;
  const appleBox = score.sort((a, b) => b - a);

  for (let i = m; i <= appleBox.length; i += m) {
    answer += appleBox[i - 1] * m;
  }

  return answer;
}
