function solution(sides) {
  const min = Math.min(...sides);
  const max = Math.max(...sides);
  const anotherMax = min + max - 1;
  return anotherMax - (max - min);
}
