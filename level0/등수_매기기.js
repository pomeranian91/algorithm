function solution(score) {
  var answer = [];
  const scoreAvg = score.map(([a, b]) => (a + b) / 2);
  const scoreRank = [...scoreAvg]
    .sort((a, b) => b - a)
    .map((score, index) => ({ score, rank: index + 1 }))
    .map((item2, index2, arr) =>
      index2 > 0 && item2.score === arr[index2 - 1].score
        ? { ...item2, rank: arr[index2 - 1].rank }
        : item2
    );

  return scoreAvg.map(
    (avg) => scoreRank.find(({ score }) => avg === score).rank
  );
}
