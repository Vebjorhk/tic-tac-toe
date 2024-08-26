const squares = document.querySelectorAll("[data-custom]");
var gameGoing = false;
var player = "1";

var list = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
]

const rowSums = list.map(row => row.reduce((sum, num) => sum + num, 0));
console.log(rowSums)

startGame();


function startGame() {
    squares.forEach(square => {
        square.addEventListener("click", handleSquareClick, {once : true});
    })

    document.getElementById("default-button").addEventListener("click", buttonClick)
}

function handleSquareClick(event) {
    if (gameGoing) {
        if (player == "1") {
            event.target.innerHTML = "X";
            player = "2";
        }
        else {
            event.target.innerHTML = "O";
            player = "1";
        }
        document.getElementById("player-indicator").innerHTML = `Player ${player} is playing`;
    }
}


function buttonClick(event) {
    gameGoing = !gameGoing;
    event.target.innerHTML = gameGoing ? "Clear" : "Start Game";
    if (!gameGoing) {
        clearBoard()
    }
}


function clearBoard() {
    Array.from(squares).forEach((element) => {
        element.innerHTML = "";
        element.addEventListener("click", handleSquareClick, {once : true});
    })
    player = "1";
    document.getElementById("player-indicator").innerHTML = `Player ${player} is playing`;
    gameGoing = true;
}


function checkWinner() {
    let row_sums = list.map(row => row.reduce((sum, num) => sum + num, 0));
    
}

