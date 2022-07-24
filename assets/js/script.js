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
    radioButton1.setAttribute("name", "buttons");
    radioButton1.classList.add("buttons");

var radioButton2 = document.createElement("Input");
    radioButton2.setAttribute("type","radio");
    radioButton2.setAttribute("name", "buttons")
    radioButton2.classList.add("buttons");

var radioButton3 = document.createElement("Input");
    radioButton3.setAttribute("type","radio");
    radioButton3.setAttribute("name", "buttons");
    radioButton3.classList.add("buttons");

var radioButton4 = document.createElement("Input");
    radioButton4.setAttribute("type","radio");
    radioButton4.setAttribute("name", "buttons");
    radioButton4.classList.add("buttons");

//this is an array that will hold the answers. the idea is that all the index values of the question, 
//options, and answers array will match up, which will make it easier to create iterate in an 
//if statement later on. all values are placeholders.
var answerArray=["Batman", "Selina Kyle", "Robin"];

//these arrays will hold all the possible options for each question. 
//"option A" will be the value for all the A options for each of the questions. 
//all values are placeholders.

    var buttonAArray =["batman", "gail simone", "Dick Clark"]
    var buttonBArray = ["Hush", "Selina Kyle", "Dick Grayson"]
    var buttonCArray = ["Alfred", "Carrie-Ann", "Tim Drake"]
    var buttonDArray = ["Terry McGinnis", "Barbara Gordon", "Tim Curry"]

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

            $("#timer").text("time's up")
            clearInterval(startTimer)
        }
    }, 1000)
}

//once the start button is clicked, this function will run and start the quiz. 
var startQuiz = function(){
    //calls the countdown function so the timer starts.
    countdown();
    
    //clears the descripotion of the quiz.
    $(".quiz-description").text("");
    
    //used as a counter to iterate through the 'if' statement that's used later.
    var questionNumber=0
    
    //variables created to target specific HTML elements that will be alter later on in the 'if' statement.
    var optionsDiv = document.querySelector(".options");
    //var questionsDiv = document.querySelector(".questions");
    
    // removes the start button from the page. 
    var removeButton = document.getElementById('start')
    removeButton.remove();
    
    //creates new button. 
    var nextButton = document.createElement("button");
        nextButton.type="button"
        nextButton.innerHTML="Press for First Question"
        nextButton.classList.add("Next")
        optionsDiv.appendChild(nextButton);


    
    $(".Next").on('click', function(){

        nextButton.innerHTML="next question"

        
        //clears values from previous iteration.
        $(".questions").text("")
        $(".button-A").text("");
        $(".button-B").text("");
        $(".button-C").text("");
        $(".button-D").text("");
        
        //iterates through each question, and option on clicking the Next Button.
        if(questionNumber<questionsArray.length){
            console.log(questionNumber)
            
            $(".questions").append("<div>" + questionsArray[questionNumber] + "</div>");
            $(".button-A").append(radioButton1 ,"   ", "<span>"+buttonAArray[questionNumber]+"</span>");
            $(".button-B").append(radioButton2 ,"   ", "<span>"+buttonBArray[questionNumber]+"</span>");
            $(".button-C").append(radioButton3 ,"   ", "<span>"+buttonCArray[questionNumber]+"</span>");
            $(".button-D").append(radioButton4 ,"   ", "<span>"+buttonDArray[questionNumber]+"</span>");

            if(questionNumber==0 ){
                score++
                console.log("the score is " + score)
            }
            if(questionNumber==1){
                score++
                console.log("The Score is " + score)
            }
            if(questionNumber==2){
                score++
                console.log("the score is "+ score)
                timeLeft=0
            }
            


            questionNumber++;

            
        }
    })   

}