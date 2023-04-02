function solution(A, B) {
  let answer = 0;
  const pushRight = (str) =>
    [str[str.length - 1], ...str.slice(0, str.length - 1)].join("");
  for (let i = 0; i < A.length; i++) {
    if (A === B) return (answer = i);
    A = pushRight(A);
  }
  return answer == 0 && -1;
}
