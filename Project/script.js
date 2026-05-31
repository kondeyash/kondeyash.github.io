const questions = {

easy:[
{
q:"How many players are there in a cricket team?",
o:["9","10","11","12"],
a:"11"
},
{
q:"Which country invented cricket?",
o:["India","England","Australia","Pakistan"],
a:"England"
},
{
q:"How many runs is a boundary worth?",
o:["4","5","6","8"],
a:"4"
},
{
q:"What is the shape of a cricket ball?",
o:["Square","Round","Oval","Triangle"],
a:"Round"
},
{
q:"How many wickets are there?",
o:["8","10","12","15"],
a:"10"
}
],

medium:[
{
q:"Who is known as Captain Cool?",
o:["Kohli","Dhoni","Rohit","Sachin"],
a:"Dhoni"
},
{
q:"Who scored 100 international centuries?",
o:["Lara","Ponting","Sachin","Kallis"],
a:"Sachin"
},
{
q:"How many overs in T20?",
o:["10","20","40","50"],
a:"20"
},
{
q:"Which trophy is for Test cricket champions?",
o:["IPL","World Test Championship","Asia Cup","Champions Trophy"],
a:"World Test Championship"
},
{
q:"What is LBW?",
o:["Leg Before Wicket","Long Bat Wicket","Left Bat Wing","None"],
a:"Leg Before Wicket"
}
],

hard:[
{
q:"Who scored the first ODI double century?",
o:["Sachin","Sehwag","Rohit","Gayle"],
a:"Sachin"
},
{
q:"Who took 10 wickets in a Test innings?",
o:["Warne","Muralitharan","Kumble","Bumrah"],
a:"Kumble"
},
{
q:"Who has most ODI runs?",
o:["Kohli","Ponting","Sachin","Rohit"],
a:"Sachin"
},
{
q:"Which country won the 1992 World Cup?",
o:["India","England","Pakistan","Australia"],
a:"Pakistan"
},
{
q:"Who is called The Wall?",
o:["Dravid","Ganguly","Laxman","Yuvraj"],
a:"Dravid"
}
]

};

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;
let selectedQuestions = [];

function startQuiz(level){

    selectedQuestions = questions[level];

    document.getElementById("startScreen")
    .classList.add("hidden");

    document.getElementById("quizScreen")
    .classList.remove("hidden");

    loadQuestion();
}

function loadQuestion(){

    clearInterval(timer);

    timeLeft = 15;

    document.getElementById("timer")
    .innerText = timeLeft;

    startTimer();

    const q = selectedQuestions[currentQuestion];

    document.getElementById("question")
    .innerText = q.q;

    document.getElementById("current")
    .innerText = currentQuestion + 1;

    const optionsDiv =
    document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.o.forEach(option=>{

        const btn =
        document.createElement("button");

        btn.className = "option";

        btn.innerText = option;

        btn.onclick = ()=>checkAnswer(btn,option);

        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(button,answer){

    clearInterval(timer);

    const correct =
    selectedQuestions[currentQuestion].a;

    if(answer === correct){

        score++;

        button.classList.add("correct");

        document.getElementById("score")
        .innerText = score;
    }
    else{

        button.classList.add("wrong");
    }

    setTimeout(nextQuestion,1000);
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < 5){

        loadQuestion();
    }
    else{

        finishQuiz();
    }
}

function startTimer(){

    timer = setInterval(()=>{

        timeLeft--;

        document.getElementById("timer")
        .innerText = timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            nextQuestion();
        }

    },1000);
}

function finishQuiz(){

    document.getElementById("quizScreen")
    .classList.add("hidden");

    document.getElementById("resultScreen")
    .classList.remove("hidden");

    document.getElementById("finalScore")
    .innerHTML =
    `🏆 Your Score: ${score}/5`;
}