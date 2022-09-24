const valueInput = document.querySelector('input[data-totalHunters]');
const chooseBtn = document.querySelector('button[data-chooseBtn]');
let result = document.querySelector('.js-result');

chooseBtn.addEventListener('click', function () {
  const hunters = Number(valueInput.value);
  result.textContent = Math.floor(1 + Math.random() * hunters);
});
