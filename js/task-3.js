'use strict';

const input = document.getElementById('name-input');
const output = document.querySelector('#name-output');
console.log(input, output);
input.addEventListener('input', function () {
  console.log(input.value);
  if (input.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = input.value.trim();
  }
  console.dir(output);
});

console.dir(document);
