function solution(n, m, section) {
  let answer = 0;
  const wallArray = new Array(n).fill(true);
  section.forEach((section) => (wallArray[section - 1] = false));

  for (let i = 0; i < n; i++) {
    if (!wallArray[i]) {
      answer += 1;
      i += m - 1;
    }
  }
  return answer;
}
