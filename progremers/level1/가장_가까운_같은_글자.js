function solution(s) {
  let answer = [];
  let template = [];

  for (let i = 0; i < s.length; i++) {
    if (!template.includes(s[i])) {
      answer.push(-1);
      template.push(s[i]);
    } else if (template.includes(s[i])) {
      answer.push(i - template.lastIndexOf(s[i]));
      template.push(s[i]);
    }
  }
  return answer;
}
