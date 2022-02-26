function solution(x) {
  let arrNumber = String(x).split("");
  let hashyad = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    hashyad += Number(arrNumber[i]);
  }
  return x % hashyad == 0 ? true : false;
}
