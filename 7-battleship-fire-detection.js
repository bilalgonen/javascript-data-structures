function isAlive(matrix, x, y, isTarget = false) {
  // console.log('x,y:', x, y)
  //Boundary case for matrix
  if (x >= 0 && x < SIZE && y >= 0 && y < SIZE) {
    if (matrix[x][y] === 1) {
      if (isTarget) {
        matrix[x][y] = 2
      } else {
        return true
      }
    }

    if (matrix[x][y] === 2) {
      let alive = false
      alive = isAlive(matrix, x, y + 1) //RIGHT
      if (alive) {
        return true
      }
      alive = isAlive(matrix, x + 1, y) //DOWN
      if (alive) {
        return true
      }
      alive = isAlive(matrix, x, y - 1) //LEFT
      if (alive) {
        return true
      }
      alive = isAlive(matrix, x - 1, y) //TOP
      if (alive) {
        return true
      }
    }
    // if (isAlive(matrix, x, y + 1)) return true //RIGHT
    // if (isAlive(matrix, x + 1, y)) return true //DOWN
    // if (isAlive(matrix, x, y - 1)) return true //LEFT
    // if (isAlive(matrix, x - 1, y)) return true //TOP
  }
  return false
}

function fire(grid, i, j) {
  //Empty grid boundary case
  if (SIZE === 0) return 0
  if (grid[i][j] === 0) {
    return 'MISS'
  } else if (grid[i][j] === 2) {
    return 'ALREADY_HIT'
  } else if (grid[i][j] === 1) {
    if (isAlive(grid, i, j, true)) {
      return 'HIT'
    } else {
      return 'SUNK'
    }
  }
  return 'INVALID_INPUT'
}

const M = [
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [2, 0, 0, 0],
  [1, 1, 0, 0],
]

let SIZE = M.length

console.log(fire(M, 0, 0)) // fire top left corner => MISS
console.log(fire(M, 0, 3)) // fire top right corner => SUNK
console.log(fire(M, 3, 0)) // fire bottom left corner => HIT
