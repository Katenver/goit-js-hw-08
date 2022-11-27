import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const FIELDVALUES_KEY = 'feedback-form-state';
let inputValues = JSON.parse(localStorage.getItem(FIELDVALUES_KEY)) || {};

feedbackFormEl.elements.email.value = inputValues.email || '';
feedbackFormEl.elements.message.value = inputValues.message || '';

feedbackFormEl.addEventListener('input', throttle(onInputFoo, 500));
feedbackFormEl.addEventListener('submit', onFormSubmit);

function onInputFoo(event) {
  if (event.target.nodeName === 'INPUT') {
    inputValues.email = event.target.value;
  } else if (event.target.nodeName === 'TEXTAREA') {
    inputValues.message = event.target.value;
  }
  localStorage.setItem(FIELDVALUES_KEY, JSON.stringify(inputValues));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(inputValues);
  inputValues = {};
  localStorage.removeItem(FIELDVALUES_KEY);
  localStorage.clear();
  feedbackFormEl.reset();
}
