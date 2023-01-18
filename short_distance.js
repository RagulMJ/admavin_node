let nodes = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 1],
    [10, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
    [9, 2],
    [10, 2],
  ],
  [
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [9, 3],
    [10, 3],
  ],
  [
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [10, 4],
  ],
  [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],
    [7, 5],
    [8, 5],
    [9, 5],
    [10, 5],
  ],
  [
    [0, 6],
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
    [5, 6],
    [6, 6],
    [7, 6],
    [8, 6],
    [9, 6],
    [10, 6],
  ],
  [
    [0, 7],
    [1, 7],
    [2, 7],
    [3, 7],
    [4, 7],
    [5, 7],
    [6, 7],
    [7, 7],
    [8, 7],
    [9, 7],
    [10, 7],
  ],
  [
    [0, 8],
    [1, 8],
    [2, 8],
    [3, 8],
    [4, 8],
    [5, 8],
    [6, 8],
    [7, 8],
    [8, 8],
    [9, 8],
    [10, 8],
  ],
  [
    [0, 9],
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
    [9, 9],
    [10, 9],
  ],
  [
    [0, 10],
    [1, 10],
    [2, 10],
    [3, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10],
    [8, 10],
    [9, 10],
    [10, 10],
  ],
];

let short_path = (start, direction) => {
  current = [];
  finish = [];
  initial = start[1];
  east = start[0];
  west = start[0];
  for (let i = 0; i < direction.length; i++) {
    if (direction[i] == 'N') {
      initial++;
      current = nodes[initial];
      finish = current[start[0]];
    }
    if (direction[i] == 'E') {
      current = nodes[initial];
      east++;
      finish = current[east];
    }
    if (direction[i] == 'W') {
      current = nodes[initial];
      west = east - 1;
      east--;
      finish = current[west];
    }
    if (direction[i] == 'S') {
      south = initial - 1;
      initial--;

      current = nodes[south];
      finish = current[east];
    }

    ans = Math.sqrt(finish[0] ** 2 + finish[1] ** 2);
  }
  if (ans) {
    if (start[0] == finish[0] && start[1] == finish[1]) {
      return 0;
    } else {
      return ans;
    }
  } else {
    return 'wrong route';
  }
};
let answer = short_path([0, 0], 'NNNNEEENE');

console.log(answer);
