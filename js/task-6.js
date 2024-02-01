'use strict';

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
console.log(createBtn, destroyBtn, boxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(number) {
  if (+input.value < 1 || +input.value > 100) {
    alert('Enter value between 1 and 100!');
    input.value = '';
    return;
  }

  destroyBoxes();
  const size = 30;

  for (let i = 0; i < number; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${size + 10 * i}px`;
    newBox.style.height = `${size + 10 * i}px`;

    const color = getRandomHexColor();
    newBox.style.backgroundColor = color;

    boxes.append(newBox);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => createBoxes(+input.value));

destroyBtn.addEventListener('click', destroyBoxes);
