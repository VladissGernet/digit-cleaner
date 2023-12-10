// //Elements
// const phoneContainer = document.querySelector('.phone');
// const phoneField = phoneContainer.querySelector('.phone__field-control');
// const resultText = phoneContainer.querySelector('.phone__result');
// const resultNotification = phoneContainer.querySelector('.phone__notification');
// const clearButton = phoneContainer.querySelector('.phone__clear');
// const errorText = phoneContainer.querySelector('.phone__error');
// const copyButton = phoneContainer.querySelector('.phone__copy');
// const quickFormattingButton = phoneContainer.querySelector('.phone__fast-copy');
//
// //Constants
// const defaultNotificationHeight = '26px';
// const valueToHideNotification = '0';
//
// //Main
// const transformPhoneValue = (value) => {
//   const clearedNumberValue = value.replace(/\D/g, '');
//   const isClearedNumberNotEmpty = clearedNumberValue !== '';
//   if (isClearedNumberNotEmpty) {
//     resultText.textContent = clearedNumberValue;
//     navigator.clipboard.writeText(clearedNumberValue);
//     resultNotification.style.height = defaultNotificationHeight;
//     errorText.style.height = valueToHideNotification;
//     return;
//   }
//   errorText.style.height = defaultNotificationHeight;
//   resultText.textContent = '';
// };
//
// //Input
// phoneField.addEventListener('input', () => {
//   errorText.style.height = valueToHideNotification;
//   resultNotification.style.height = valueToHideNotification;
//   resultText.textContent = '';
// });
// phoneField.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Enter') {
//     transformPhoneValue(evt.target.value);
//   }
// });
//
// //Buttons
// copyButton.addEventListener('click', () => {
//   resultNotification.style.height = valueToHideNotification;
//   transformPhoneValue(phoneField.value);
// });
// clearButton.addEventListener('click', () => {
//   resultText.textContent = '';
//   phoneField.value = '';
//   resultNotification.style.height = valueToHideNotification;
//   errorText.style.height = valueToHideNotification;
// });
// quickFormattingButton.addEventListener('click', () => {
//   navigator.clipboard.readText().then((text) => {
//     transformPhoneValue(text);
//   });
// });
//
