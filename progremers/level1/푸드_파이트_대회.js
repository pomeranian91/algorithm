function solution(food) {
  var answer = [];

  food.forEach((item, index) => {
    if (item >= 2) {
      const count = parseInt(item / 2);
      answer.push(index.toString().repeat(count));
    }
  });

  const sumCount = [answer.join(""), 0, answer.reverse().join("")];
  return sumCount.join("");
}
