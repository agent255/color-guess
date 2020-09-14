var numSquares=6;
var colors=[];
var pickedColor;
var resetButton;
var colourValue;
var answer;
var body;
var colourButtons;

// onload triggers this function
function game(){
 	resetButton=document.querySelector("#reset");
 	colourValue=document.querySelector("#colourValue");
 	answer=document.querySelector("#answer");
 	body=document.querySelector("body");
 	colourButtons=document.querySelectorAll(".colourButton");
 	init();
	resetButton.addEventListener("click",function(){
    	reset();
	});
}

function reset(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colourValue.textContent=" "+pickedColor;
    for(var i=0;i<colourButtons.length;i++){
    if(colors[i]){
        colourButtons[i].style.display="block";
        colourButtons[i].style.backgroundColor=colors[i];
        colourButtons.textContent="This Colour???";
    }
    else{
        colourButtons[i].style.display="none";
    }}
    answer.textContent="";
    resetButton.textContent="Reset";
    body.style.backgroundColor='violet';
}

function mainfunc(){
    for(var i=0; i<colourButtons.length;i++){ colourButtons[i].addEventListener("click",function(){
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor){
                answer.textContent="Correct!";
                resetButton.textContent="Play Again?";
                body.style.backgroundColor='green';
            }
            else{
                this.style.backgroundColor="#232323";
                body.style.backgroundColor='red';
                answer.textContent="Try Again!!!";
            }
        });
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
var arr=[];
    for(var i=0; i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

function init(){
    mainfunc();
    reset();
}
