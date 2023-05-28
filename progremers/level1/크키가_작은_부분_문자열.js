function solution(t, p) {
  var answer = 0;
  const pl = p.length;
  const tl = t.length;

  for (let i = 0; i <= tl - pl; i++) {
    let num = t.slice(i, pl + i);

    if (Number(num) <= Number(p)) {
      answer++;
    }
  }
  return answer;
}
