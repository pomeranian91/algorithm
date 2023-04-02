function solution(answers) {
  var answer = [];
  const firstChild = [1, 2, 3, 4, 5];
  const secondChild = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdChild = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == firstChild[i % firstChild.length]) score[0]++;
    if (answers[i] == secondChild[i % secondChild.length]) score[1]++;
    if (answers[i] == thirdChild[i % thirdChild.length]) score[2]++;
  }
  const winner = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (winner == score[i]) {
      console.log(answer);
      answer.push(i + 1);
    }
  }
  return answer;
}
