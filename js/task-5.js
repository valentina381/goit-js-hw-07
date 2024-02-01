'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector('span.color');
const button = document.querySelector('button.change-color');

button.addEventListener('click', () => {
  const color = getRandomHexColor();

  colorName.textContent = color;
  document.body.style.backgroundColor = color;
});
