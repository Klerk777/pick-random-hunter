const LOCAL_STORAGE_KEY = 'total-hunters-number';
const valueInput = document.querySelector('input[data-totalHunters]');
const chooseBtn = document.querySelector('button[data-chooseBtn]');
const result = document.querySelector('.js-result');

const OnPageReload = () => {
  const savedTotalHunters = localStorage.getItem(LOCAL_STORAGE_KEY);
  valueInput.value = savedTotalHunters ? savedTotalHunters : undefined;
};
const OnButtonClick = () => {
  const hunters = Number(valueInput.value);
  result.textContent = Math.floor(1 + Math.random() * hunters);
  result.classList.add('active');

  setTimeout(() => {
    result.classList.remove('active');
  }, 777);
};

OnPageReload();

valueInput.addEventListener('input', e => {
  localStorage.setItem(LOCAL_STORAGE_KEY, e.target.value);
});

chooseBtn.addEventListener('click', OnButtonClick);
