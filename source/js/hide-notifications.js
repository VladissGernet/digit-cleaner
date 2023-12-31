import {errorText, resultNotification} from './elements.js';
import {NotificationHeight} from './constants.js';

const hideAllNotifications = () => {
  errorText.style.height = NotificationHeight.HIDDEN;
  resultNotification.style.height = NotificationHeight.HIDDEN;
};

export {hideAllNotifications};
