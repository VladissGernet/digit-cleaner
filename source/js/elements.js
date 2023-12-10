const phoneContainer = document.querySelector('.phone');
const phoneField = phoneContainer.querySelector('.phone__field-control');
const resultText = phoneContainer.querySelector('.phone__result');
const resultNotification = phoneContainer.querySelector('.phone__notification');
const clearButton = phoneContainer.querySelector('.phone__clear');
const errorText = phoneContainer.querySelector('.phone__error');
const copyButton = phoneContainer.querySelector('.phone__copy');
const quickFormattingButton = phoneContainer.querySelector('.phone__fast-copy');

export {
  phoneField,
  resultText,
  resultNotification,
  clearButton,
  errorText,
  copyButton,
  quickFormattingButton,
};
