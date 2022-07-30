//this variable will hold the score, and eventually get stored in localStorage.
var score=0;

//this variable will be used later in the code so that when someone keeps getting a perfect score, they can get the 'new' hiscore.
var perfectScore=5;

//used as a counter to iterate through the 'if' statement that's used later.
var questionNumber=0

//counter for the timer.
var timeLeft= 300

//this will subtract 50 seconds from the timer for the wrong answer. 
var penalty = function(){
    timeLeft -=20
}



//following code will make buttons that will be appended to the HTML later in the code.
var buttonA = document.createElement("button");
    buttonA.textContent="A"
    buttonA.setAttribute("type", "button");
    buttonA.setAttribute("id", "option-A");
    buttonA.classList.add("buttons");


var buttonB = document.createElement("button");
    buttonB.setAttribute("type","button");
    buttonB.setAttribute("id", "option-B");
    buttonB.classList.add("buttons");
    buttonB.textContent="B"

var buttonC = document.createElement("button");
    buttonC.setAttribute("type","button");
    buttonC.setAttribute("id", "option-C");
    buttonC.classList.add("buttons");
    buttonC.textContent="C"

var buttonD = document.createElement("button");
    buttonD.setAttribute("type","button");
    buttonD.setAttribute("id", "option-D");
    buttonD.classList.add("buttons");
    buttonD.textContent="D"


//these arrays will hold all the possible options for each question. 
//"option A" will be the value for all the A options for each of the questions. 
//all values are placeholders.

    var buttonAArray =["Batman", "Gail simone", "Dick Clark", "Kite Man", "Zatanna"]
    var buttonBArray = ["Hush", "Selina Kyle", "Dick Grayson", "Magneto", "Professor Woodrue"]
    var buttonCArray = ["Alfred", "Carrie-Ann", "Tim Drake", "Joker", "Pepper Potts"]
    var buttonDArray = ["Terry McGinnis", "Barbara Gordon", "Tim Curry", "Christian Bale", "Poison Ivy"]

//this is an array that will hold the questions. all values are placeholders.
var questionsArray=["What is the alter ego of Bruce Wayne?", "What is Catwoman's real identity?", "Who is Batman's most well known sidekick?", "Who is Batman's most well known villain?", 
"Who is Batman's most well known plant-based sometimes-villain-sometimes-hero"];

//following is the answer key:
/*
iteration 0 question 1 answer: A
iteration 1 question 2 answer: B
iteration 2 question 3 answer: B
iteration 3 question 4 answer: C
iteration 4 question 5 answer: D
*/



// this starts the countdown once the start button is clicked. 
var countdown = function(){
    console.log("this happens second");


    var startTimer = setInterval(function(){
        if(questionNumber==5){
            //this is here so that the clock doesn't continue after the quiz is done.
            //if this weren't here, endQuiz would get triggered twice:
            //once when the user finishes the quiz, and again when the clock runs out.
            clearInterval(startTimer);
        }
        if(timeLeft>1){
            $("#timer").text(timeLeft + " seconds remaining")
            timeLeft--;
        } else if(timeLeft == 1){
            $("#timer").text(timeLeft + " second remaining")
            timeLeft--;
        } else if(timeLeft==0){
            $("#timer").text(timeLeft+" seconds remaining. "+"Game Over!");
            clearInterval(startTimer);
            endQuiz();
        }
    }, 1000)
}

//following functions will be run when the user presses the button with right answer or the button with the wrong answer.
var rightAnswer = function(){
    questionNumber++;
    score++;
    console.log("updated score: "+ score)
    quizMeat();
}

var wrongAnswer = function(){
    questionNumber++
    penalty();
    quizMeat();
}

//this function will create the buttons and questions when it's run.
var quizMeat = function(){



    //variables created to target specific HTML elements that will be alter later on in the 'if' statement.
 
    if(questionNumber==0){
    var removeStart = document.querySelector("#start");
     removeStart.remove();
    }
  
    //clears values from previous iteration.
    $(".questions").text("")
    $(".button-A").text("");
    $(".button-B").text("");
    $(".button-C").text("");
    $(".button-D").text("");
    
    //iterates through each question, and option on clicking the Next Button. added a '+1' so that after the final question, it iterates one more time and clears everything.
    if(questionNumber<questionsArray.length+1){
        console.log(questionNumber)
        
        $(".questions").append("<div>" + questionsArray[questionNumber] + "</div>");
        $(".button-A").append(buttonA ,"   ", "<span>"+buttonAArray[questionNumber]+"</span>");
        $(".button-B").append(buttonB ,"   ", "<span>"+buttonBArray[questionNumber]+"</span>");
        $(".button-C").append(buttonC ,"   ", "<span>"+buttonCArray[questionNumber]+"</span>");
        $(".button-D").append(buttonD ,"   ", "<span>"+buttonDArray[questionNumber]+"</span>");

        
        //following code will check to see which question is being iterated, and if the correct button is pressed for that iteration then,
        //the score will increase and move to the next question.
        $("#option-A").on('click', function(){
            if(questionNumber===0){
                rightAnswer();
            } else{
                wrongAnswer();
            }

            })
        $("#option-B").on('click', function(){
            if(questionNumber==1 || questionNumber==2){
                rightAnswer();
            } else{
                wrongAnswer(); 
            }
        })
        $("#option-C").on('click', function(){
            if(questionNumber==3){
                rightAnswer();
            } else{
                wrongAnswer();
            }
        })
        $("#option-D").on('click',function(){
            if(questionNumber==4){
                rightAnswer();
            } else {
                wrongAnswer();
            }
        })
        //after the final array question, the code will iterate one more time, and run this block.
        if(questionNumber==questionsArray.length){
            console.log("final score: "+ score);

            endQuiz();
        }
    
}}


//once the start button is clicked, this function will run and start the quiz. 
startQuiz = function(){

    
    //clears the descripotion of the quiz.
    $(".quiz-description").text("");
    //starts the timer.
    countdown();
    //starts the quiz proper.
    quizMeat();

}

//this pretty much starts everything once it's clicked. it starts the 
//countdown and the quiz.
$("#start").click(function(event){
    event.preventDefault();
    console.log("this happens first");

    startQuiz();
})

//following code will save score. it should save the score if there is no score, but on later playthroughs, it should check the score, and update it if newscore is same or higher.
var savingScore = function(){
    if(score >= parseInt(localStorage.getItem("highscore"))){
        console.log("true highscore");
        localStorage.setItem("highscore", score);
        hiScoreWinner();

    } else if(localStorage.getItem("highscore")===null) {
        console.log("first playthrough");
        localStorage.setItem("highscore", score)
        hiScoreWinner();
        console.log("if statement did NOT trigger")

    } else{
        finalResults();

    }
}

var finalResults= function(){
    console.log("final results");

}

var hiScoreWinner = function(){
    console.log("hiScore Winner");

}


var endQuiz= function(){
    //clears everything out.
    console.log("end quiz trigger");
    $(".questions").remove();
    $(".button-A").remove();
    $(".button-B").remove();
    $(".button-C").remove();
    $(".button-D").remove(); 
    savingScore();
}
