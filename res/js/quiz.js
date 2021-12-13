const quiz = document.querySelector('.quiz-cont')
const quizH2 = document.querySelector('.quiz-h2')
const quizP = document.querySelector('.quiz-p')
/* const answers = document.querySelectorAll('.answer'); */
const answersDOM = document.querySelector('.answers')
const question = document.querySelector('.question')
const answerDetail = document.querySelector('.answer-detail')
const img = document.querySelector('.quiz-img img')
const progress = document.querySelector('.quiz-bar')
const currQuestionDOM = document.querySelector('.currQuestion')
const questionsLengthDOM = document.querySelector('.questionsLength')
const pointsDOM = document.querySelector('.points')
const timeLeftDOM = document.querySelector('.time-left')
const startQuizBtn = document.querySelector('.start-quiz-btn')
const score = document.querySelector('.score')
const tryAgain = document.querySelector('.try-again')

let currQuestion = 0, points = 0, questionsLength = 9, interval, answerPassed = false;

let questions = [
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/1_ezcge0.jpg",
        Question: "Czy szkło można poddać recyklingowi nieskończoną ilość razy?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "a",
        details: "Szkło można wielokrotnie poddawać recyklingowi bez utraty jego wytrzymałości."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893681/2_aqn2yv.jpg",
        Question: "Czy wiesz, co należy zrobić z plastikowymi torbami?",
        a: "Aby mogły zostać poddane recyklingowi, muszą wrócić do sprzedaży detalicznej",
        b: "Plastikowe torby można wrzucić do domowego kosza na śmieci",
        c: null,
        d: null,
        answer: "a",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/3_xwi2vv.png",
        Question: "Czy każdy metal nadaje się do recyklingu?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638894198/4_ebhxu6.jpg",
        Question: "Czy pocięty papier można poddać recyklingowi?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "a",
        details: "Pocięty papier może zostać poddany recyklingowi."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638894546/11_oodvzx.jpg",
        Question: "Który z tych metalowych przedmiotów nadaje się do recyklingu w Twoim koszu na surowce wtórne?",
        a: "Wieszaki",
        b: "Śrubki",
        c: "Sztućce",
        d: "Żadne z powyższych",
        answer: "d",
        details: "Sprzęt sortujący w sortowni recyklingu nie jest przeznaczony do obsługi przedmiotów metalowych, które nie mają kształtu pojemnika (puszki i butelki)."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893675/9_h26g9a.jpg",
        Question: "Który z podanych przedmiotów może zostać poddany recyklingowi?",
        a: "Folia bąbelkowa",
        b: "Puste puszki po aerozolu",
        c: "Karteczki samoprzylepne",
        d: "Tubka pasty do zębów",
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/8_dkrxni.jpg",
        Question: "Który z podanych przedmiotów NIE może zostać poddany recyklingowi?",
        a: "Folia cynowa",
        b: "Użyte pudełka po pizzy",
        c: "Baterie",
        d: "Szkło",
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638999556/energizer-energizer-batteries-352_wblhat.jpg",
        Question: "Baterie jednorazowego użytku należy wyrzucić do kosza na surowce wtórne",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "b",
        details: "Baterie – jednorazowe lub ładowalne – nigdy nie powinny trafiać do kosza na surowce wtórne."
    }
]



// Start Quiz
startQuizBtn.addEventListener('click', startQuiz)

function startQuiz(){

    // Manage classlist
    quiz.classList.remove('off')
    startQuizBtn.classList.add('off')
    quizH2.classList.add("off")
    quizP.classList.add("off")

    // Show quiz and hide results if it is visible
    const childs = quiz.childNodes;
    for(let child of childs){

        if(child.nodeName == "#text")
            continue

        if(child.classList.contains('quiz-results'))
            child.classList.add('off')
        else
            child.classList.remove('off')
    }

    questionsLengthDOM.innerHTML = questions.length
    nextQuestion()
}

function resetQuiz(correctAnswer){

    // Clear classlists
    const answers = document.querySelectorAll('.answer')
    answers.forEach(answer =>{
        answer.remove()
    })
    
    // Set Navigation Info
    currQuestionDOM.innerHTML = currQuestion
    pointsDOM.innerHTML = points
    clearInterval(interval)
    interval = null
    countdown(correctAnswer)
}

function nextQuestion(){
    
    // If its the final question, show results
    if(currQuestion == 8){

        const childs = quiz.childNodes;
        for(let child of childs){
    
            if(child.nodeName == "#text")
                continue
    
            if(!child.classList.contains('quiz-results'))
                child.classList.add('off')
            else
                child.classList.remove('off')
        }

        score.innerHTML = points
        return
    }
    
    // Get random question
    let currquestion = questions[Math.floor(Math.random() * questions.length)]
    questions = questions.filter(item => item != currquestion)

    // Move progress bar
    currQuestion++
    progress.style.width = `${currQuestion * 12.5}%`

    // Reset Previous Question and Display New Question
    const {Image,Question,a,b,c,d,answer,details} = currquestion
    answerPassed = false
    const ans = [a,b,c,d]
    const symbols = ["a","b","c","d"]
    
    question.innerHTML = Question
    img.src = Image

    img.addEventListener('load', () =>{
      
        resetQuiz(answer)

        // Display answers
        
        // If Questions has only 2 answers
        if(c == null){
    
            for(let i = 0; i < 2; i++){
                const div = document.createElement('div')
                div.setAttribute('class',`answer${i+1} answer`)
                div.innerHTML = ans[i]
                div.dataset.answer = symbols[i]
                answersDOM.append(div)
            }
        }
        // If it has 4
        else{
    
            for(let i = 0; i < 4; i++){
                const div = document.createElement('div')
                div.setAttribute('class',`answer${i+1} answer`)
                div.innerHTML = ans[i]
                div.dataset.answer = symbols[i]
                answersDOM.append(div)
            }
        }
    
    
        // Event listener for clicking an answer
        const answers = document.querySelectorAll('.answer')
        answers.forEach(item =>{
            item.addEventListener('click', e =>{
    
                if(answerPassed) return
                
                // Set answerPassed true to prevent clicking multiple times
                answerPassed = true
                clearInterval(interval)
                interval = null
    
                // Check if answer is correct
                if(item.dataset.answer == answer)
                    roundWon(answer)
                else
                    roundLost(answer)
            })
        })
    })
}



function roundLost(correctAnswer){
    
    // Set red background for wrong answers, and green for correct answer
    const answers = document.querySelectorAll('.answer')
    answers.forEach(ans =>{
        if(ans.dataset.answer == correctAnswer){
            ans.classList.add('correct')
        }
        else{
            ans.classList.add('wrong')
        }
    })

    // Clear timeout and increment current question
    /* clearInterval(interval) */
    answerPassed = true

    // Start next question
    setTimeout(nextQuestion,1500)
}




function roundWon(correctAnswer){
    
    // Set green background for correct answer
    const answers = document.querySelectorAll('.answer')
    answers.forEach(ans =>{
        if(ans.dataset.answer == correctAnswer){
            ans.classList.add('correct')
            return
        }
    })

    // Clear timeout and increment current question
    /* clearInterval(interval) */

    // Start next question
    setTimeout(nextQuestion,1500)
    points++
}




function countdown(correctAnswer){
    let timeLeft = 60
    timeLeftDOM.innerHTML = timeLeft

    interval = setInterval(() =>{
        timeLeft -= 1
        timeLeftDOM.innerHTML = timeLeft

        if(timeLeft == 0)
            roundLost(correctAnswer)
    },1000)
}