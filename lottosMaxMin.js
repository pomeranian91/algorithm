function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const minCount = lottos.filter((a) => win_nums.includes(a)).length;
  const zeroCount = lottos.filter((a) => !a).length;
  const maxCount = minCount + zeroCount;
  return [rank[maxCount], rank[minCount]];
}
