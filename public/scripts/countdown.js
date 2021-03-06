const containerDay = document.querySelector('.container-day .day');
const containerHour = document.querySelector('.container-hour .hour');
const containerMinute = document.querySelector('.container-minute .minute');
const containerSecond = document.querySelector('.container-second .second');

const dayAsNumber = Number(containerDay.textContent);
const hourAsNumber = Number(containerHour.textContent);
const minuteAsNumber = Number(containerMinute.textContent);
const secondAsNumber = Number(containerSecond.textContent);

const displayTime = (day, hour, minute, second) => {
  containerDay.textContent = day;
  containerHour.textContent = hour;
  containerMinute.textContent = minute;
  containerSecond.textContent = second;
};

const countdown = (
  year,
  month,
  numberDay,
  numberHour,
  numberMinute,
  numberSecond
) => {
  const now = new Date().getTime();
  const countdownDate = new Date(
    year,
    month,
    numberDay,
    numberHour,
    numberMinute,
    numberSecond,
    0
  ).getTime();
  const gap = countdownDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the timer
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // display the time
  displayTime(textDay, textHour, textMinute, textSecond);
};

const button = document.querySelector('button.subscribe');

// button.addEventListener('click', () => {
//   setInterval(
//     countdown,
//     1000,
//     2022,
//     1,
//     dayAsNumber,
//     hourAsNumber,
//     minuteAsNumber,
//     secondAsNumber
//   );
// });

// Using the form to activate the counting
const modalContainer = document.querySelector('div.form-container');

button.addEventListener('click', () => {
  modalContainer.classList.remove('close');
  modalContainer.classList.add('open');
});

const modalSubmitButton = document.querySelector('button#submit');
// const modalForm = document.querySelector('form.modal-form');

modalSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();

  modalContainer.classList.remove('open');
  modalContainer.classList.add('close');

  setInterval(countdown, 1000, 2022, 1, 10, 7, 30, 0);
});

const modalExitButton = document.querySelector('button#exit');

modalExitButton.addEventListener('click', () => {
  modalContainer.classList.remove('open');
  modalContainer.classList.add('close');
});
