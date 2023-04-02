function solution(polynomial) {
  let countNum = 0;
  let countX = 0;
  const count = polynomial.split(" + ");
  const confirmBoolean = count.map((item) => isNaN(item));
  const confirmX = count
    .filter((item) => item.includes("x"))
    .map((item) => item.split("x")[0] || 1);

  for (let i = 0; i < count.length; i++) {
    if (!confirmBoolean[i]) {
      countNum += Number(count[i]);
    }
  }

  for (let i = 0; i < confirmX.length; i++) {
    countX += Number(confirmX[i]);
  }

  return countX === 0 && countNum === 0
    ? 0
    : countX === 0 && countNum >= 1
    ? countNum.toString()
    : (countX === 1 ? "" : countX) +
      "x" +
      (countNum != 0 ? " + " + countNum : "");
}
