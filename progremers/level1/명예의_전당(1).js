function solution(k, score) {
  let answer = [];
  for (let i = 1; i <= score.length; i++) {
    let sortRank = score.slice(0, i).sort((a, b) => b - a);
    if (sortRank.length > k) {
      sortRank = sortRank.slice(0, k);
    }
    answer.push(sortRank[sortRank.length - 1]);
  }
  return answer;
}
