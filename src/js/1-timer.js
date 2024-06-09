import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageUrl from '../img/alert-icon.svg';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
const { inputEl, btnEl, daysEl, hoursEl, minutesEl, secondsEl } = refs;

btnEl.disabled = true;
let userSelectedDate;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      btnEl.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        messageSize: '16',
        imageWidth: 302,
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#b51b1b',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        position: 'topRight',
        iconUrl: imageUrl,
        theme: 'dark',
      });
    } else if (userSelectedDate > new Date()) {
      btnEl.disabled = false;
    }
  },
};

flatpickr(inputEl, options);

btnEl.addEventListener('click', () => {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = userSelectedDate - currentTime;
    convertMs(diff);
  }, 1000);
  btnEl.disabled = true;
  inputEl.disabled = true;
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');

  return { days, hours, minutes, seconds };
}
