function solution(n, arr1, arr2) {
  let answer = [];
  let result = "";
  const map1 = arr1.map((item) => item.toString(2).padStart(n, "0"));
  const map2 = arr2.map((item) => item.toString(2).padStart(n, "0"));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === "1" || map2[i][j] === "1") {
        result += "#";
      } else {
        result += " ";
      }
    }
    answer.push(result);
    result = "";
  }

  return answer;
}
