const weddingDate = new Date('2025-04-06T00:00:00'); // Set your wedding date here

function padNumber(num) {
  return String(num).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = padNumber(days);
  document.getElementById('hours').textContent = padNumber(hours);
  document.getElementById('minutes').textContent = padNumber(minutes);
  document.getElementById('seconds').textContent = padNumber(seconds);

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown-container').innerHTML = '<h1>We are married!</h1>';
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize immediately