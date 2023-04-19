function solution(s) {
  var answer = s;
  const numberArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numberArr.length; i++) {
    let arr = answer.split(numberArr[i]);
    answer = arr.join(i);
  }
  return Number(answer);
}
