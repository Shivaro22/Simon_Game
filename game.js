const buttonColors = ['red',"blue","green","yellow"];
const gamePattern=[];
const userClickedPattern = [];
var randomColor;
var startOrNo = false;
var level =0;
$("h1").text("Press A key to start");
$(document).keypress(function(){
    if(startOrNo===false){
        startOrNo=true;
        nextSequence();
    }
})


function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    
    var randomChosenColor = buttonColors[randomNumber];
    randomColor = randomChosenColor;
    console.log(randomNumber);
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $('#' + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    level++;
    $("h1").text("Level "+level);
    console.log(level);
    playSound(randomChosenColor);

}

function playSound(name){
    $('#' + name).click(function() {
        var audio = new Audio('/sounds/' + name + '.mp3');  // Dynamically select the sound based on color
        audio.play().catch(function(error) {
            console.error('Audio play error:', error);
        });
        animatePress(name);
    });
}

function animatePress(currentColour){
   $('#' + currentColour).addClass("pressed"),1000;
   setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   },100)
}

$(".btn").click(function(){
    var userChosenColor = $(this).attr('id');
    
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    console.log(userClickedPattern);
});



//console.log(randomChosenColor);
