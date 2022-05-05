function solution(strings, n) {
  strings.sort();
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a - b;
    } else if (a[n] > b[n]) {
      return 1;
    } else {
      return -1;
    }
  });
}
