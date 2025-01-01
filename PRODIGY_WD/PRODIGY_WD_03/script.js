const board = document.getElementById('board');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameActive = true;
const gameState = Array(9).fill(null);

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinner() {
  for (const condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  return gameState.includes(null) ? null : 'Tie';
}

function handleCellClick(e) {
  const cellIndex = e.target.dataset.index;

  if (!gameActive || gameState[cellIndex]) return;

  gameState[cellIndex] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add('taken');

  const winner = checkWinner();
  if (winner) {
    gameActive = false;
    status.textContent = winner === 'Tie' ? "It's a Tie!" : `Player ${winner} Wins!`;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `Player ${currentPlayer}'s Turn`;
}

function resetGame() {
  gameState.fill(null);
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = "Player X's Turn";
  board.innerHTML = '';
  createBoard();
}

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
  }
}

resetButton.addEventListener('click', resetGame);

createBoard();
