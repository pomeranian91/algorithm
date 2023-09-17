function solution(N, stages) {
  let failStageArr = [];
  let remain = stages.length;
  for (let i = 1; i <= N; i++) {
    const faliStage = stages.filter((el) => el == i);
    failStageArr.push({ INDEX: i, faliRate: faliStage.length / remain });
    remain -= faliStage.length;
  }
  failStageArr.sort((a, b) => {
    return b.faliRate - a.faliRate;
  });
  return failStageArr.map((el) => el.INDEX);
}
