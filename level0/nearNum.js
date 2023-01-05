function solution(array, n) {
  var arraySet = array.map((a) => Math.abs(a - n));
  const searchNum = Number(arraySet.sort((a, b) => a - b)[0]);
  const answer = array
    .sort((a, b) => a - b)
    .find((a) => Math.abs(a - n) === searchNum);
  return answer;
}
