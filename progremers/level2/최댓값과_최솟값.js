function solution(s) {
  var nums = s.split(" ").map((num) => parseInt(num));
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return `${min} ${max}`;
}
