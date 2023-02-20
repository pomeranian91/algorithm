function solution(lines) {
  var answer = 0;
  let linesTable = new Array(200);
  linesTable.fill(0);

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      linesTable[j + 100] += 1;
    }
  }
  for (let i in linesTable) {
    if (linesTable[i] > 1) {
      answer += 1;
    }
  }
  return answer;
}
