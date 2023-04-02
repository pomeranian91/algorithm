function solution(array) {
  return [...array.join("")].filter((item) => item == "7").length;
}
