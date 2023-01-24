var container = document.querySelector('#question-container');
var questionEl = document.querySelector('#question');
var answersEl = document.querySelector('#answers');

var currentQuestion = 1;

var questions = [
    {
        question: 'This is question 1?',
        answers: [
            { text: 'answer 1' },
            { text: 'answer 2' },
            { text: 'answer 3' },
            { text: 'answer 4' }],
        correctAnswer: 'answer 2'
    },
    {
        question: 'This is question 2?',
        answers: [
            { text: 'answer 4' },
            { text: 'answer 5' },
            { text: 'answer 6' },
            { text: 'answer 7' }],
        correctAnswer: 'answer 7'
    }
];

function renderQuestion() {
    answersEl.textContent = "";
    var questionIndex = currentQuestion - 1;
    var selectedQuestion = questions[questionIndex];

    questionEl.textContent = selectedQuestion.question;

    for (var i = 0; i < selectedQuestion.answers.length; i++) {
        var answer = selectedQuestion.answers[i].text;

        var li = document.createElement('li');
        li.textContent = answer;
        li.setAttribute('data-q-index', questionIndex);
        li.setAttribute('data-q-answer', answer);
        li.addEventListener('click', handleAnswerClick);
        answersEl.append(li);
    }
}

function handleAnswerClick(event) {
    console.log(event.target);
    var qIndex = event.target.getAttribute('data-q-index');
    var qAnswer = event.target.getAttribute('data-q-answer');
    
    var question = questions[qIndex];

    if(qAnswer === question.correctAnswer) {
        console.log('correct!')
        currentQuestion++;
        renderQuestion();
    } else {
        console.log('incorrect');
    }
}

renderQuestion();