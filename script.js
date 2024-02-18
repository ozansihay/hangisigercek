let questions = [
    { image1: 'images/1.png', image2: 'images/2.png', correct: 'photo1' },
    { image1: 'images/3.png', image2: 'images/4.png', correct: 'photo1' },
    { image1: 'images/5.png', image2: 'images/6.png', correct: 'photo2' },
    { image1: 'images/7.png', image2: 'images/8.png', correct: 'photo2' },
    { image1: 'images/9.png', image2: 'images/10.png', correct: 'photo2' }
];
let currentScore = 0;
let currentQuestionIndex = 0;

function loadNewQuestion() {
    // Soruları karıştır
    questions.sort(() => Math.random() - 0.5);
    if (currentQuestionIndex < questions.length) {
        let question = questions[currentQuestionIndex];
        document.getElementById('photo1').src = question.image1;
        document.getElementById('photo2').src = question.image2;
    } else {
        endGame();
    }
}

function makeChoice(selectedPhoto) {
    let question = questions[currentQuestionIndex];
    let isCorrect = (selectedPhoto === question.correct);

    if (isCorrect) {
        currentScore++;
        document.getElementById('result').innerText = "Doğru!";
    } else {
        document.getElementById('result').innerText = "Yanlış!";
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(loadNewQuestion, 1000); // 1 saniye sonra yeni soruya geç
    } else {
        endGame();
    }

    document.getElementById('score').innerText = `Skor: ${currentScore}/${currentQuestionIndex + 1}`;
}

function endGame() {
    document.getElementById('result').innerText += ` Oyun bitti! Skorunuz: ${currentScore}/${questions.length}.`;
    document.getElementById('restart-button').style.display = 'block';
}

function restartGame() {
    currentScore = 0;
    currentQuestionIndex = 0;
    document.getElementById('restart-button').style.display = 'none';
    document.getElementById('result').innerText = "";
    loadNewQuestion();
}

loadNewQuestion();
