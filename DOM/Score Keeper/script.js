var button1 = document.getElementById("one");
var button2 = document.getElementById("two");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

button1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent= p1Score;
    }
});

button2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent= p2Score;
    }
});

resetButton.addEventListener("click", resetGame);

numInput.addEventListener("change", function(){
    winningScore = Number(this.value);
    winningScoreDisplay.textContent = winningScore;
    resetGame();
})

function resetGame (){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}