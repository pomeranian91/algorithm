function solution(players, callings) {
  const playerList = {};
  const rankList = {};

  players.forEach((player, index) => {
    const rank = index + 1;
    playerList[player] = rank;
    rankList[rank] = player;
  });

  callings.forEach((calling) => {
    const losePlayer = rankList[playerList[calling] - 1];

    rankList[playerList[calling]] = losePlayer;
    rankList[playerList[losePlayer]] = calling;
    playerList[calling] -= 1;
    playerList[losePlayer] += 1;
  });

  return Object.values(rankList);
}
