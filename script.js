const quizData = [
    {
        question: 'How old is Titu?',
        a: '32',
        b: '33',
        c: '34' ,
        d: '35' ,
        correct: 'd'
    } , {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d:'Javascript',
        correct: 'a'
    } , {
        question: 'Who is the president of US?',
        a: 'Florin POP',
        b: 'Donald Trump',
        c: 'Joe Baiden',
        d:'Mihai Andrei',
        correct: 'c'
    } , {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading style sheet',
        c: 'Json object notation',
        d:'Application Programming Interface',
        correct: 'a'
    } , {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d:'None of them',
        correct: 'b'
    }
]
const answersElm = document.querySelectorAll('.answer')
const quiz = document.querySelector('#quiz')
const questionElm = document.querySelector('#question')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const submitBtn = document.querySelector('button')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionElm.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d 
}

function getSelected(){

    let answer = undefined


    answersElm.forEach(answerEl => {
    if(answerEl.checked){
        answer = answerEl.id
    }
 })
 return answer
}

function deselectAnswers(){
    answersElm.forEach(answerEl => {
        answerEl.checked = false
     })
}

submitBtn.addEventListener('click' , ()=>{
    const answer = getSelected()

    if(answer){ 
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length){
            loadQuiz()
        } else{
            quiz.innerHTML = `
            <h2> You answered correctly at ${score} out of ${quizData.length} questions.</h2> 
            
            <button onclick="location.reload()">Reload</button>`
        }
    }
})