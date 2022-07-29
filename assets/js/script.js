//this variable will hold the score, and eventually get stored in localStorage.
var score=0;

//used as a counter to iterate through the 'if' statement that's used later.
var questionNumber=0

//counter for the timer.
var timeLeft= 30

//this will subtract 50 seconds from the timer for the wrong answer. 
var penalty = function(){
    timeLeft -=50
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

    var buttonAArray =["batman", "gail simone", "Dick Clark"]
    var buttonBArray = ["Hush", "Selina Kyle", "Dick Grayson"]
    var buttonCArray = ["Alfred", "Carrie-Ann", "Tim Drake"]
    var buttonDArray = ["Terry McGinnis", "Barbara Gordon", "Tim Curry"]

//this is an array that will hold the questions. all values are placeholders.
var questionsArray=["What is the alter ego of Bruce Wayne?", "What is Catwoman's real identity?", "Who is Batman's most well known sidekick?"];





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
        } else if(timeLeft==0){
            endQuiz();
            $("#timer").text(timeLeft+" seconds remaining. "+"Game Over!")
            clearInterval(startTimer)
        }
    }, 1000)
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

        
        //following code will check to see which question is being iterated, and if the correct button is pressed,
        //the score will increase and move to the next question.
        $("#option-A").on('click', function(){
            if(questionNumber===0){
                questionNumber++
                score++
                console.log("updated score: "+score)
                quizMeat();
            } else{
                questionNumber++
                penalty();
                quizMeat();    
            }

            })
        $("#option-B").on('click', function(){
            if(questionNumber==1){
                questionNumber++
                score++
                console.log("updated score: "+score)
                quizMeat();
            } else{
                questionNumber++
                penalty();
                quizMeat();   
            }
        })
        //after the final array question, the code will iterate one more time, and run this block.
        if(questionNumber==questionsArray.length){
            console.log("final score: "+ score);
            timeLeft=0;
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

var endQuiz= function(){
    //clears everything out.
    $(".questions").remove();
    $(".button-A").remove();
    $(".button-B").remove();
    $(".button-C").remove();
    $(".button-D").remove(); 
}