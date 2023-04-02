function solution(array) {
  const maxNum = Math.max(...array);
  const maxIndex = array.indexOf(max);
  return [maxNum, maxIndex];
}
