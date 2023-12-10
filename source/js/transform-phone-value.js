import {errorText, resultNotification, resultText} from './elements.js';
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

export {transformPhoneValue};
