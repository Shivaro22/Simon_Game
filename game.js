const buttonColors = ['red',"blue","green","yellow"];
const gamePattern=[];
function nextSequence(){
    var randomNumber = (Math.random()*3).toFixed(0) ;
    console.log(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
    gamePattern.add(randomChosenColor);
}
nextSequence();

//console.log(randomChosenColor);
