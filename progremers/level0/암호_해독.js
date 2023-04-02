function solution(cipher, code) {
  var answer = [];
  for (let i = 1; i < cipher.length / code + 1; i++) {
    answer.push([...cipher][i * code - 1]);
  }
  return answer.join("");
}
