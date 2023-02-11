function solution(board) {
  let n = board.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        if (
          (i > 0 && board[i - 1][j] === 1) ||
          (j > 0 && board[i][j - 1] === 1) ||
          (i < n - 1 && board[i + 1][j] === 1) ||
          (j < n - 1 && board[i][j + 1] === 1) ||
          (i > 0 && j > 0 && board[i - 1][j - 1] === 1) ||
          (i < n - 1 && j < n - 1 && board[i + 1][j + 1] === 1) ||
          (i > 0 && j < n - 1 && board[i - 1][j + 1] === 1) ||
          (i < n - 1 && j > 0 && board[i + 1][j - 1] === 1)
        ) {
          continue;
        }
        count++;
      }
    }
  }
  return count;
}
