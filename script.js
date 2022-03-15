const quizDB =[
    {
question:"What is part of a database that holds only one type of information?",
a:"report",
b:"field",
c:"record",
d:"file",
ans:"ans2"
    },
    {
        question:"'OS' computer abbreviation usually means ?",
        a:"Order of Significance",
        b:"Open SOFTWARE",
        c:"Operating System",
        d:"Optical sensor",
        ans:"ans3"
            },

            {
                question:"'.MOV' extension refers usually to what kind of file?",
                a:"Image file",
                b:"Animation/movie file",
                c:"Audio file",
                d:"MS Office document",
                ans:"ans2"
                    },
                   
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion=()=>{
 question.innerText = quizDB[questionCount].question;
 option1.innerText = quizDB[questionCount].a;
 option2.innerText = quizDB[questionCount].b;
 option3.innerText = quizDB[questionCount].c;
 option4.innerText = quizDB[questionCount].d;
}

loadQuestion();

const getAnswer = () => {
let answer;
answers.forEach((curransEl)=>{
    if(curransEl.checked){
        answer = curransEl.id;
    }
   
})
return answer;
}

const deselectAll = () =>{
    answers.forEach((currel)=> currel.checked=false)
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getAnswer();
    console.log(checkedAnswer)
    if(checkedAnswer===quizDB[questionCount].ans) score++;

    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length)  {
        loadQuestion();

    } else{
        showScore.innerHTML=` <h3>You scored ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" onclick="location.reload()" > Try again! </button>
        `;
        showScore.classList.remove('scoreArea');
    }
})