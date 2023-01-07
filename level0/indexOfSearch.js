function solution(s) {
  const answer = [];
  const str = [...s];
  str.forEach((item, index) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      answer.push(item);
    }
  });
  return answer.sort().join("");
}
