function solution(dartResult) {
  var answer = 0;
  const answerArray = [];
  let sum = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        //10일 때 오류나서 해결
        sum = 10;
        i++;
      } else {
        sum = dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      answerArray.push(parseInt(sum));
    } else if (dartResult[i] === "D") {
      answerArray.push(parseInt(sum) ** 2);
    } else if (dartResult[i] === "T") {
      answerArray.push(parseInt(sum) ** 3);
    } else if (dartResult[i] === "#") {
      answerArray[answerArray.length - 1] *= -1;
    } else if (dartResult[i] === "*") {
      answerArray[answerArray.length - 1] *= 2;
      answerArray[answerArray.length - 2] *= 2;
    }
  }
  for (let i = 0; i < answerArray.length; i++) {
    answer += Number(answerArray[i]);
  }
  return answer;
}
