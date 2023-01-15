function solution(s) {
  const lowerSplitArr = s.toLowerCase().split(" ");
  const answer = lowerSplitArr.map(
    (item) => item.slice(0, 1).toUpperCase() + item.slice(1)
  );
  return answer.join(" ");
}
