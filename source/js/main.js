import {
  phoneField,
  resultText,
  resultNotification,
  clearButton,
  errorText,
  copyButton,
  quickFormattingButton,
} from './elements.js';
import {NotificationHeight} from './constants.js';


const transformPhoneValue = (value) => {
  const clearedNumberValue = value.replace(/\D/g, '');
  const isClearedNumberNotEmpty = clearedNumberValue !== '';
  if (isClearedNumberNotEmpty) {
    resultText.textContent = clearedNumberValue;
    navigator.clipboard.writeText(clearedNumberValue);
    resultNotification.style.height = NotificationHeight.DEFAULT;
    errorText.style.height = NotificationHeight.HIDDEN;
    return;
  }
  errorText.style.height = NotificationHeight.DEFAULT;
  resultText.textContent = '';
};

//Input
phoneField.addEventListener('input', () => {
  errorText.style.height = NotificationHeight.HIDDEN;
  resultNotification.style.height = NotificationHeight.HIDDEN;
  resultText.textContent = '';
});
phoneField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    transformPhoneValue(evt.target.value);
  }
});

//Buttons
copyButton.addEventListener('click', () => {
  resultNotification.style.height = NotificationHeight.HIDDEN;
  transformPhoneValue(phoneField.value);
});
clearButton.addEventListener('click', () => {
  resultText.textContent = '';
  phoneField.value = '';
  resultNotification.style.height = NotificationHeight.HIDDEN;
  errorText.style.height = NotificationHeight.HIDDEN;
});
quickFormattingButton.addEventListener('click', () => {
  navigator.clipboard.readText().then((text) => {
    transformPhoneValue(text);
  });
});
