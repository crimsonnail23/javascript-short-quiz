$("#start").click(function(){
    event.preventDefault();
    console.log("this happens first");
    countdown();
})

var countdown = function(){
    console.log("this happens second");
    var timeLeft= 300

    var startTimer = setInterval(function(){
        if(timeLeft>1){
            $("#timer").text(timeLeft + " seconds remaining")
            timeLeft--;
        } else if(timeLeft == 1){
            $("#timer").text(timeLeft + " second remaining")
            timeLeft--;
        } else{

            $("#timer").text('')
            clearInterval(startTimer)
        }
    }, 1000)
}

