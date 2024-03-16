const questions = [
    {
        question:"Which of the keywords is used to define a variable in javascript?",
        answer:  [
            {text: "var", correct: false},
            {text: "let", correct: false},
            {text: "Both Aand B", correct: true},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question:"Which of the following methods is used to access HTML elements using javascript?",
        answer:[
            {text: "getElementbyId()", correct: false},
            {text: "getElementByClassName()", correct: false},
            {text: "Both Aand B", correct: true},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question:"Upon encountering empty statements, what does the javascript interpreter do?",
        answer:[
            {text: "Throws an error", correct: false},
            {text: "Ignores the statements", correct: true},
            {text: "Gives a warning", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question:"Which of the following methods can be used to display data in some from using Javascripts?",
        answer:[
            {text: "document.write()", correct: false},
            {text: "console.log()", correct: false},
            {text: "window.alert()", correct: false},
            {text: "All of the above", correct: true},
        ]
    },
    {
        question:"How can a datatype be declared to be a constant type?",
        answer:[
            {text: "const", correct: true},
            {text: "var", correct: false},
            {text: "let", correct: false},
            {text: "constant", correct: false},
        ]
    },
    {
        question:"What keyword is used to check wheather a given property is valid or not?",
        answer:[
            {text: "in", correct: true},
            {text: "is in", correct: false},
            {text: "exists", correct: false},
            {text: "lies", correct: false},
        ]
    },
    {
        question:"What is the use of the <noscript> tag in Javascript?",
        answer:[
            {text: "The content are displayed by non-JS-based browsers.", correct: true},
            {text: "Clears all the cookies and cache.", correct: false},
            {text: "Both Aand B", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question:"What does the Javascript debugger statement do?",
        answer:[
            {text: "It will debug all the errors in a program at run time.", correct: false},
            {text: "It acts as breakpoint in a program.", correct: true},
            {text: "It will debug ereor in the current statement if any.", correct: false},
            {text: "All of the above", correct: false},
        ]
    },
    {
        question:"The 3 basic object attribute in Javascript are:?",
        answer:[
            {text: "Class,prototype,objects'parameters.", correct: false},
            {text: "Class,prototype,object's extensible flag", correct: true},
            {text: "Class,parameters,object's extensible flag.", correct: false},
            {text: "Classes,Native object,and interfaces and object's extensible falg.", correct: false},
        ]
    },
    {
        question:"What is the correct palce to insert a Javascript?",
        answer:[
            {text: "The <Head> section", correct: false},
            {text: "The <Body> section", correct: false},
            {text: "Both A and B", correct: true},
            {text: "None of the above", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex +1;
    questionElement.innerHTML=questionNo + "."+ currentQuestion.question;

    currentQuestion.answer.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
       startQuiz(); 
    }
})
 
startQuiz();