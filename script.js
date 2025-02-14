// Environmental facts
const facts = [
    'The Earth's surface is 71% water.',
    'The largest living structure is the Great Barrier Reef.',
    'A single tree can absorb up to 48 pounds of carbon dioxide per year.',
];

// Go green tips
const tips = [
    'Reduce your use of single-use plastics.',
    'Use public transportation or carpool when possible.',
    'Turn off lights and electronics when not in use.',
];

// Environmental quiz questions
const quizQuestions = [
    {
        question: 'What is the largest living structure?',
        answers: ['The Great Barrier Reef', 'The Amazon Rainforest', 'The Grand Canyon'],
        correctAnswer: 0,
    },
    {
        question: 'How much carbon dioxide can a single tree absorb per year?',
        answers: ['10 pounds', '48 pounds', '100 pounds'],
        correctAnswer: 1,
    },
];

// Display environmental facts
const factList = document.getElementById('fact-list');
facts.forEach((fact) => {
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    factList.appendChild(listItem);
});

// Display go green tips
const tipList = document.getElementById('tip-list');
tips.forEach((tip) => {
    const listItem = document.createElement('li');
    listItem.textContent = tip;
    tipList.appendChild(listItem);
});

// Start quiz button event listener
const startQuizButton = document.getElementById('start-quiz-button');
startQuizButton.addEventListener('click', () => {
    const quizQuestionsElement = document.getElementById('quiz-questions');
    quizQuestionsElement.innerHTML = '';
    quizQuestions.forEach((question, index) => {
        const questionElement = document.createElement('p');
        questionElement.textContent = question.question;
        quizQuestionsElement.appendChild(questionElement);
        const answersElement = document.createElement('ul');
        question.answers.forEach((answer) => {
            const answerElement = document.createElement('li');
            answerElement.textContent = answer;
            answersElement.appendChild(answerElement);
        });
        quizQuestionsElement.appendChild(answersElement);
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', () => {
            const userAnswer = answersElement.querySelector('li:hover');
            if (userAnswer.textContent === question.answers[question.correctAnswer]) {
                alert('Correct!');
            } else {
                alert('Incorrect.');
            }
        });
        quizQuestionsElement.appendChild(submitButton

                        
            


