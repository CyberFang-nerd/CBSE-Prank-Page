// script.js
document.getElementById('nextButton').addEventListener('click', function() {
    const selectedStream = document.querySelector('input[name="stream"]:checked');
    if (selectedStream) {
        const secondQuestion = document.getElementById('secondQuestion');
        const secondQuestionText = document.getElementById('secondQuestionText');
        if (selectedStream.value === 'pcm') {
            secondQuestionText.textContent = 'If you get a chance to take admission in IIT Bombay, will you go?';
        } else if (selectedStream.value === 'pcb') {
            secondQuestionText.textContent = 'If you get a chance to take admission in AIIMS Delhi, will you go?';
        }
        secondQuestion.classList.remove('hidden');
        document.getElementById('streamForm').classList.add('hidden');
        document.getElementById('nextButton').style.display = 'none';
        document.querySelector('h2').style.display = 'none';
        document.getElementById('yesButton').classList.remove('hidden');
        document.getElementById('noButton').classList.remove('hidden');
    } else {
        alert('Please select a stream.');
    }
});

document.getElementById('yesButton').addEventListener('mouseover', function() {
    let button = document.getElementById('yesButton');
    button.style.position = 'absolute';
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Are you sure? OK No Problem we have many more Nigga Students...');
});
