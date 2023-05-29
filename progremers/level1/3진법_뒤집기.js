function solution(n) {
  const baseThree = n.toString(3);
  const reverseNum = baseThree.split("").reverse().join("");
  const baseTen = parseInt(reverseNum, 3);

  return baseTen;
}
