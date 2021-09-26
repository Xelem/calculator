const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

// Representing Characters On The Screen
buttons.forEach(function(button) {
  button.addEventListener('click', (e) => {
   let value = e.target.dataset.num;
   screen.value += value;
  })
})

// Equal and Clear Buttons Functions
equal.addEventListener('click', () => {
  if (screen.value === '') {
    screen.value = 'Please Enter A Value';
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
})

clear.addEventListener('click', () => {
  screen.value = '';
})