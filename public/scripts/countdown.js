const timer = document.querySelector('h2.timer');
const button = document.querySelector('button.subscribe');

// The string that represents the time
const timerValue = timer.textContent;

// Catching the elements for the countdown
let timerDays = document.querySelector('span.days');
let timerHours = document.querySelector('span.hours');
let timerMinutes = document.querySelector('span.minutes');
let timerSeconds = document.querySelector('span.seconds');

// Catching the numbers
let days = Number(timerDays.textContent);
let hours = Number(timerHours.textContent);
let minutes = Number(timerMinutes.textContent);
let seconds = Number(timerSeconds.textContent);

const createCountdownTimer = () => {
  const countdown = setInterval(() => {
    seconds--;
    timerSeconds.textContent = seconds;

    if (seconds === 0) {
      timerSeconds.textContent = 59;
      seconds = 59;

      minutes--;
      timerMinutes.textContent = minutes;
    }

    if (minutes === 0) {
      timerMinutes.textContent = 59;
      minutes = 59;

      hours--;
      timerHours.textContent = hours;
    }

    if (hours === 0) {
      timerHours.textContent = 59;
      hours = 59;

      days--;
      timerDays.textContent = days;
    }

    if (days === 0) {
      clearInterval(countdown);
    }
  }, 1000);
};

button.addEventListener('click', () => {
  createCountdownTimer();
});
