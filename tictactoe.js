const prompt = require('prompt-sync')();
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let currentPlayer = "x";

let gameActive = true;

// Printing the game board
function board() {
    console.log(`
       ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
       ----------------
       ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
       ----------------
       ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
    `);
}

// Making moves
function handleMove(pos) {
    if (gameBoard[pos] === " ") {
        gameBoard[pos] = currentPlayer;
    } else {
        console.log("Cell already taken");
        return false;
    }

    if (checkWin()) {
        board();
        console.log(`Player ${currentPlayer} wins!`);
        gameActive = false;
        return true;
    }

    if (gameBoard.every((cell) => cell !== " ")) {
        board();
        console.log("It's a draw");
        gameActive = false;
        return true;
    }

    currentPlayer = currentPlayer === "x" ? "o" : "x";
    return true;
}

// Check win function
function checkWin() {
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return conditions.some((condition) => {
        const [a, b, c] = condition;
        return (
            gameBoard[a] === currentPlayer &&
            gameBoard[b] === currentPlayer &&
            gameBoard[c] === currentPlayer
        );
    });
}

// Main game loop
while (gameActive) {
    board();
    const pos = prompt(`Player ${currentPlayer}, enter your move (0-8): `);

    if (!isNaN(pos) && pos >= 0 && pos <= 8) {
        handleMove(parseInt(pos));
    } else {
        console.log("Invalid position. Please enter a number between 0 and 8.");
    }
}