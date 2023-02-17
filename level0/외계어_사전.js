function solution(spell, dic) {
  var answer = 0;
  const sort = (str) => {
    return [...str].sort((a, b) => (a < b ? -1 : a != b ? 1 : 0)).join("");
  };
  return dic.find((dic) => sort(dic) == sort(spell)) ? 1 : 2;
}
