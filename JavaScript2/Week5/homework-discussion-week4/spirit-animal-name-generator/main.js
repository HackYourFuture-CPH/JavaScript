function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomSpiritAnimalName() {
  const ALL_NAMES = [
    'The fullmoon wolf',
    'The fullmoon cat',
    'The fullmoon tigress',
    'The fullmoon lion'
  ];

  const randomIndex = getRandomInt(ALL_NAMES.length)
  return ALL_NAMES[randomIndex];
}


const textInput = document.querySelector('input[type="text"].name');
const btnInput = document.querySelector('input[type="submit"]');
const outputdiv = document.querySelector('div.output');
const select = document.querySelector('select');
console.log(select);

function showSpiritName() {
  const spiritName = textInput.value + ' ' + getRandomSpiritAnimalName();
  outputdiv.innerHTML = "Your spirit name is: " + spiritName;
}

function updateEventHooks() {
  const selectedValue = select.value;

  if (selectedValue === 'click') {
    textInput.removeEventListener('mouseenter', showSpiritName);
    textInput.removeEventListener('keyup', showSpiritName);

    btnInput.addEventListener('click', showSpiritName);
  } else if (selectedValue === 'mouseover'){
    btnInput.removeEventListener('click', showSpiritName);
    textInput.removeEventListener('keyup', showSpiritName);

    textInput.addEventListener('mouseenter', showSpiritName);
  } else if (selectedValue === 'textchange') {
    btnInput.removeEventListener('click', showSpiritName);
    textInput.removeEventListener('mouseenter', showSpiritName);

    textInput.addEventListener('keyup', showSpiritName);

  } else {
    btnInput.removeEventListener('click', showSpiritName);
    textInput.removeEventListener('mouseenter', showSpiritName);
    textInput.removeEventListener('keyup', showSpiritName);
  }
}

select.addEventListener('change', updateEventHooks);
//
