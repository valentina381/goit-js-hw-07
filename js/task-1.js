'use strict';

// document.querySelector | document.querySelectorAll

// const listItems = document.querySelectorAll('li.item');
// console.log(`Number of categories: ${listItems.length}`); // How many items? 3

/* listItems.forEach((listItem) => {
  const categoryTitle = listItem.children[0].textContent; // h2
  const numberOfChildren = listItem.children[1].children.length;

  console.log(`Category: ${categoryTitle},\nElements: ${numberOfChildren}`);
}); */

const listItems = document.querySelectorAll('li.item'); // [NodeList]
console.log(`Number of categories: ${listItems.length}`);
