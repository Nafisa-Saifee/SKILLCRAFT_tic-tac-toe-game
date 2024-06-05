let cells = document.querySelectorAll(".cell");
let restartButton = document.querySelector("#restartButton");
let message_container = document.querySelector(".message-container");
let message = document.querySelector("#message");
let container = document.querySelector(".container")

let TurnO = true;

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const restartGame = () => {
    TurnO = true;
    enableCell();
    message_container.classList.add("hide");
    location.reload();
};

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (TurnO) {
          cell.innerText = "O";
          TurnO = false;  
        }
        else{
            cell.innerText = "X";
            TurnO = true;  
        }
        cell.disabled = true;

        checkWinner();
    });
});

const disableCell = () => {
    for (let cell of cells) {
        cell.disabled = true;
    }
};
const enableCell = () => {
    for (let cell of cells) {
        cell.disabled = false;
        cell.innerText = "";
     }
}

const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`;
    message-container.classList.remove("hide");
    disableCell();
};
const checkWinner = () =>{
   for (let pattern of WINNING_COMBINATIONS) {
    let pos1Val = cells[pattern[0]].innerText;
    let pos2Val = cells[pattern[1]].innerText;
    let pos3Val = cells[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val=== pos3Val) {
            showWinner(pos1Val);
        }
    }
  } 
};
restartButton.addEventListener("click", restartGame);

