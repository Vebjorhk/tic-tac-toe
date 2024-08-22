var gameBoard = document.getElementById("game-board");

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("square")) {
        console.log(event.target)
        event.target.innerHTML = "X"
    }
})

function place_character(player) {
    if (player == "1") {

    }
    else {

    }
}