import {
  clearButton,
  copyButton,
  phoneField,
  quickFormattingButton,
  resultNotification,
  resultText
} from './elements.js';
import {NotificationHeight} from './constants.js';
import {transformPhoneValue} from './transform-phone-value.js';
import {hideAllNotifications} from './hide-notifications.js';

const initButtons = () => {
  copyButton.addEventListener('click', () => {
    resultNotification.style.height = NotificationHeight.HIDDEN;
    transformPhoneValue(phoneField.value);
  });
  clearButton.addEventListener('click', () => {
    resultText.textContent = '';
    phoneField.value = '';
    hideAllNotifications();
  });
  quickFormattingButton.addEventListener('click', () => {
    navigator.clipboard.readText().then((text) => {
      transformPhoneValue(text);
    });
  });
};

export {initButtons};
