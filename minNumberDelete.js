function solution(arr) {
  const minNum = arr.indexOf(Math.min(...arr));
  arr.splice(minNum, 1);

  return arr.length ? arr : -1;
}
