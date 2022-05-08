function solution(participant, completion) {
  var answer = "";
  const par = participant.sort();
  const com = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (par[i] !== com[i]) {
      answer = par[i];
      return answer;
    }
  }
  return answer;
}
