//this variable will hold the score, and eventually get stored in localStorage.
var score=0;

//counter for the timer.
var timeLeft= 300

//this will subtract 50 seconds from the timer for the wrong answer. 
var penalty = function(){
    timeLeft -=50
}

//following code will make radio buttons that will be appended to the HTML.

var radioButton1 = document.createElement("Input");
    radioButton1.setAttribute("type","radio");

//this is an array that will hold the answers. the idea is that all the index values of the question, 
//options, and answers array will match up, which will make it easier to create iterate in an 
//if statement later on. all values are placeholders.
var answerArray=["Batman", "Selina Kyle", "Robin"];

//these arrays will hold all the possible options for each question. 
//"option A" will be the value for all the A options for each of the questions. 
//all values are placeholders.

    var buttonAArray =["batman", "gail simone", "Dick Clark"]

//this is an array that will hold the questions. all values are placeholders.
var questionsArray=["What is the alter ego of Bruce Wayne?", "What is Catwoman's real identity?", "Who is Batman's most well known sidekick?"];

//this pretty much starts everything once it's clicked. it starts the 
//countdown and the quiz.
$("#start").click(function(){
    event.preventDefault();
    console.log("this happens first");

    startQuiz();
})

// this starts the countdown once the start button is clicked. 
var countdown = function(){
    console.log("this happens second");


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

//once the start button is clicked, this function will run and start the quiz. 
var startQuiz = function(){
    countdown();
    $(".quiz-description").text("");
    var questionNumber=0
    var optionsDiv = document.querySelector(".options");
    var questionsDiv = document.querySelector(".questions");
    var removeButton = document.getElementById('start')
    var nextButton = document.createElement("button");
        nextButton.type="button"
        nextButton.innerHTML="Press for First Question"
        nextButton.classList.add("Next")
        optionsDiv.appendChild(nextButton);

    // removes the start button from the page.    
    removeButton.remove();
    $(".Next").on('click', function(){

        nextButton.innerHTML="next question"
        console.log(questionNumber)
        
        //clears values from previous iteration.
        $(".questions").text("")
       
        //iterates through each question, and option on clicking the Next Button.
        if(questionNumber<questionsArray.length){
            $(".questions").append("<div>" + questionsArray[questionNumber] + "</div>");
            $(".button-A").append([radioButton1 , "<div>"+buttonAArray[questionNumber]+"</div>"])
            questionNumber++;

            
        }
    })   

}