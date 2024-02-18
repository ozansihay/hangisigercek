let questions = [
    { image1: 'images/1.webp', image2: 'images/2.webp', correct: 'photo1' },
    { image1: 'images/3.webp', image2: 'images/4.webp', correct: 'photo1' },
    { image1: 'images/5.webp', image2: 'images/6.webp', correct: 'photo2' },
    { image1: 'images/7.webp', image2: 'images/8.webp', correct: 'photo2' },
   { image1: 'images/9.webp', image2: 'images/10.webp', correct: 'photo1' },
];
let currentScore = 0;
let currentQuestionIndex = 0;

function loadNewQuestion() {
    // Mevcut soru için fotoğrafları güncelle
    let question = questions[currentQuestionIndex];
    document.getElementById('photo1').src = question.image1;
    document.getElementById('photo2').src = question.image2;
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
        // Bir sonraki soruya geç
        currentQuestionIndex++;
        loadNewQuestion();
    } else {
        // Oyun bitti, sonucu göster ve yeniden başlat butonunu göster
        document.getElementById('result').innerText += ` Oyun bitti! Skorunuz: ${currentScore}/${questions.length}.`;
        document.getElementById('restart-button').style.display = 'block';
    }

    // Skoru güncelle
    document.getElementById('score').innerText = `Skor: ${currentScore}/${currentQuestionIndex + 1}`;
}

function restartGame() {
    currentScore = 0;
    currentQuestionIndex = 0;
    document.getElementById('restart-button').style.display = 'none'; // Yeniden başlat butonunu gizle
    document.getElementById('result').innerText = "";
    loadNewQuestion(); // İlk soruyu tekrar yükle
}

// İlk soruyu yükle
loadNewQuestion();
