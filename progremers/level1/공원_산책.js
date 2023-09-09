function solution(park, routes) {
  const maxHeight = park.length - 1;
  const maxWidth = park[0].length - 1;

  let column = 0;
  let row = 0;

  park.forEach((item, index) => {
    const findStart = item.indexOf("S");
    if (findStart >= 0) {
      column = index;
      row = item.indexOf("S");
    }
  });

  routes.forEach((position) => {
    const [direction, range] = position.split(" ");
    let newColumn = column;
    let newRow = row;
    let pass = true;

    for (let i = 0; i < range; i++) {
      if (direction === "E") {
        newRow++;
      } else if (direction === "W") {
        newRow--;
      } else if (direction === "N") {
        newColumn--;
      } else if (direction === "S") {
        newColumn++;
      }

      if (
        newColumn > maxHeight ||
        newRow > maxWidth ||
        newColumn < 0 ||
        newRow < 0 ||
        park[newColumn][newRow] == "X"
      ) {
        pass = false;
        break;
      }
    }
    if (pass) {
      column = newColumn;
      row = newRow;
    }
  });
  return [column, row];
}
