const numberArray = []
for (let i = 1; i < 77; i++) {
  numberArray.push(i)
}

const createNumberCells = function () {
  const cellsSection = document.getElementById('cells')
  const numberBingo = numberArray
  cellsSection.innerHTML = ''

  for (let i = 1; i < 77; i++) {
    const cell = document.createElement('div')
    const numberCell = document.createElement('h3')
    numberCell.innerText = i
    cell.appendChild(numberCell)
    cellsSection.appendChild(cell)
    cell.classList.add('cell-style')
  }
}

createNumberCells()


