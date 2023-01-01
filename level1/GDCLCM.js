function solution(n, m) {
  var answer = [];
  let GDC = 0;
  let LCM = 0;

  let num = n > m ? n : m;

  for (let i = 1; i <= num; i++) {
    if (n % i == 0 && m % i == 0) {
      GDC = i;
    }
  }
  LCM = (n * m) / GDC;
  answer = [GDC, LCM];
  return answer;
}
