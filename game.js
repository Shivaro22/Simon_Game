const buttonColors = ['red',"blue","green","yellow"];
const gamePattern=[];
const userClickedPattern = [];
var randomColor;

function nextSequence(){
    var randomNumber = (Math.random()*3).toFixed(0) ;
    console.log(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    randomColor = randomChosenColor;
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $('#' + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


    playSound(randomChosenColor);


    $(".btn").click(function(){
        var userChosenColor = $(this).attr('id');
        
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        console.log(userClickedPattern);
    });

}

function playSound(name){
    $('#' + name).click(function() {
        var audio = new Audio('/sounds/' + name + '.mp3');  // Dynamically select the sound based on color
        audio.play().catch(function(error) {
            console.error('Audio play error:', error);
        });
    });
}

nextSequence();

//console.log(randomChosenColor);
