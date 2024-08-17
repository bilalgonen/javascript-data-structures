function mark_current_island(matrix, x, y, r, c) {
  if (x < 0 || x >= r || y < 0 || y >= c || matrix[x][y] != '1')
    //Boundary case for matrix
    return

  //Mark current cell as visited
  matrix[x][y] = '2'

  //Make recursive call in all 4 adjacent directions
  mark_current_island(matrix, x + 1, y, r, c) //DOWN
  mark_current_island(matrix, x, y + 1, r, c) //RIGHT
  mark_current_island(matrix, x - 1, y, r, c) //TOP
  mark_current_island(matrix, x, y - 1, r, c) //LEFT
}

function numIslands(grid) {
  rows = grid.length
  if (rows === 0)
    //Empty grid boundary case
    return 0
  cols = grid[0].length

  //Iterate for all cells of the array
  no_of_islands = 0
  for (let i = 0; i < rows; ++i) {
    for (j = 0; j < cols; ++j) {
      if (grid[i][j] == '1') {
        mark_current_island(grid, i, j, rows, cols)
        no_of_islands += 1
      }
    }
  }
  return no_of_islands
}

const M = [
  [1, 1, 0],
  [0, 0, 0],
  [0, 0, 1],
]
console.log(numIslands(M)) // 2
