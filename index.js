function trimArray(arr) {
  return arr.map(x => x.trim()).filter(x => x !== '')
}

function KeyedMatrix(str) {
  const lines = trimArray(str.split('\n'))
  const columns = trimArray(lines[0].split('|'))
  const rows = []
  const values = []
  for (const row of lines.slice(1)) {
    const data = trimArray(row.split('|'))
    rows.push(data[0])
    values.push(data.slice(1))
  }
  const matrix = {}
  for (let x = 0; x < rows.length; x++) {
    row = rows[x]
    matrix[row] = {}
    for (let y = 0; y < columns.length; y++) {
      column = columns[y]
      matrix[row][column] = values[x][y]
    }
  }
  return matrix
}

const matrix = KeyedMatrix(`
     | b1 | b2 | b3 |
| a1 | 10 | 20 | 30 |
| a2 | 5  | 10 | 15 |
`)

console.log(matrix['a1']['b1'])
console.log(matrix['a1']['b2'])
console.log(matrix['a1']['b3'])
console.log(matrix['a2']['b1'])
console.log(matrix['a2']['b2'])
console.log(matrix['a2']['b3'])
