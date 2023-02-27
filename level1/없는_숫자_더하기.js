function solution(numbers) {
  const everyNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sortNum = numbers.sort((a, b) => a - b);
  const notInNum = everyNum.filter((i) => !sortNum.includes(i));

  return notInNum.reduce((a, b) => a + b);
}
