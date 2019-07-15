
var numSquares = 6;
var h1 = document.querySelector("h1");
var colors= [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var newColor = document.querySelector("#newColor");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

initial();

function initial(){
    //mode buttons
    setupModeButtons();
    setupSquares();
    reset();
}
function setupModeButtons(){
    for(var i = 0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            // if(this.textContent ==="Easy"){
            //     numSquares=3;
            // }
            // else{
            //     numSquares=6;
            // }

            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor === pickedColor){
                messageDisplay.textContent="Correct!";
                newColor.textContent="Play Again?"
                changeColor(pickedColor);
                h1.style.backgroundColor = pickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent="Try Again";
            }
        });
    }
}
function changeColor(color){
    //loop through all squares and change to match the picked color
    for(var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColor (num){

    //make an array of colors
    var colors = [];

    //add num random colors to array
    for (var i = 0; i < num; i++){
        colors[i]=randomColor();
    }
    return colors;
}

function randomColor(){
    //Math.random() // pick a random number from 0-1, does not include 1
    //Math.floor(Math.random() * 255 + 1); //pick a random number from 0 to 255, and do include 255, math.floor remove everything after the decimal point
    
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    //in the form rgb(r, g, b) and space is important
    return "rgb("+r+", "+g+", "+b+")";
}

function pickColor(){
    var random = Math.floor(Math.random()* colors.length +1); //colors.length is 3 in easy mode, and 6 in hard mode
    return colors[random];
}

newColor.addEventListener("click", function(){
    reset();
});


function reset(){
    newColor.textContent = "New Colors";
    //generate all new colors
    colors= generateRandomColor(numSquares);

    //pick new color from array
    pickedColor = pickColor(); 

    //change new picked color
    colorDisplay.textContent = pickedColor;

    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        //add initial colors to squares
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent="";
}