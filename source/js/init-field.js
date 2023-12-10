import {phoneField, resultText} from './elements.js';
import {transformPhoneValue} from './transform-phone-value.js';
import {hideAllNotifications} from './hide-notifications.js';


const initField = () => {
  phoneField.addEventListener('input', () => {
    hideAllNotifications();
    resultText.textContent = '';
  });
  phoneField.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      transformPhoneValue(evt.target.value);
    }
  });
};

export {initField};
