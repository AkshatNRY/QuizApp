const quizData = [
    {
        question: 'How old is FLorin?',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'c'
    },
    {
        question: 'What is the most used language of 2019?',
        a:'Java',
        b:'Python',
        c:'JavaScript',
        d:'C',
        correct:'a'
    },
    {
        question: 'Who is the President of US?',
        a:'Florin Pop',
        b:'Donald Trumlp',
        c:'Ivan Saldano',
        d:'Joe Biden',
        correct:'d'
    },
    {
        question: 'What is the Capital of India?',
        a:'Delhi',
        b:'Mumbai',
        c:'Punjab',
        d:'Lucknow',
        correct:'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a:'1996',
        b:'1994',
        c:'1995',
        d:'None of these',
        correct:'d'
    }
]

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const question = document.getElementById('question');
const quiz = document.getElementById('quiz');
const over = document.getElementById('over');


let i = 0;
let score = 0;


loop();

function loop(){

    deselectAnswers();

    question.innerText = quizData[i].question;
    a_text.innerText = quizData[i].a;
    b_text.innerText = quizData[i].b;
    c_text.innerText = quizData[i].c;
    d_text.innerText = quizData[i].d;
     
}



function checked(){


    var ans = quizData[i].correct;

    var a = document.querySelectorAll(".answer");
    a.forEach((answerEl) =>{
       if(answerEl.checked){
           if(answerEl.id == ans){
               score++;
           }
           else{
               console.log("Wrong");
           }
       }
       else{
           console.log("Not checked");
       }
   });

};

function deselectAnswers(){
    var a = document.querySelectorAll(".answer");
    a.forEach((answerEl) =>{
        answerEl.checked = false;
    });
};



document.querySelector('button').addEventListener('click',()=>{

    checked();

    i++;

    if(i<quizData.length){
        loop();
    }
    else{
        over.innerText = "QUIZ OVER";
        quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Replay</button>`
    }


});


