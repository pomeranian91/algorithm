function solution(n) {
  const answer = String(n)
    .split("")
    .reverse()
    .map((a) => Number(a));
  return answer;
}
