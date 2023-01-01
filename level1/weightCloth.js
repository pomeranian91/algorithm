function solution(n, lost, reserve) {
  var answer = n - lost.length;
  let realLost = lost.filter((a) => !reserve.includes(a));
  let realReserve = reserve.filter((a) => !lost.includes(a));
  answer += lost.length - realLost.length;
  realLost.sort((a, b) => a - b);
  realLost.forEach((l) => {
    if (realReserve.length === 0) {
      return;
    }

    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });
  return answer;
}
