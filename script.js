function startQuestions() {
  document.getElementById("questions").style.display = "block";
}

function answerYes() {
  document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "Here's the truth";
  document.getElementById("message").style.display = "block";
  document.getElementById("messageText").innerText = "I think you're awsome and i really like you.";
  showConfetti()
}

function answerNo() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "YAY 🎉🎉🎉";
  document.getElementById("message").style.display = "block";
  document.getElementById("messageText").innerText = "No worries";
  showConfetti()

}

// Function to show confetti
function showConfetti() {
  const confettiSettings = {
    target: 'confetti-canvas',
    respawn: true,
    colors: ['#ff0000', '#00ff00', '#0000ff'], 
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
    confetti.clear();
  }, 5000);
}

