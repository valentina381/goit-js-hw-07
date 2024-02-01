'use strict';

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

/* 

  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  } => `<li class="list-item">
            <img
                src=${img.url}
                alt=${img.alt}
                width="300"
            />
        </li>`
  '

*/

const list = document.querySelector('.gallery');
/* 
const listItem = document.createElement('li');
listItem.textContent = 'Item 1';
listItem.className = 'list-item';
const image = document.createElement('img');
image.src = images[0].url;
image.alt = images[0].alt;
image.width = 300;
listItem.append(image);

list.append(listItem);

console.log(listItem);

const listItem2 = `
    <li class="list-item">
        Item 2
        <img
            src=${images[1].url}
            alt=${images[1].alt}
            width="300"
        />
    </li>
`;

*/

images.forEach((img) => {
  /*   
  const listItem = document.createElement('li'); // create a li element  <li></li>
  listItem.className = 'list-item'; <li class="list-item"></li>

  const image = document.createElement('img'); // <img />
  image.src = img.url; // <img src='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
  image.alt = img.alt; // <img src='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='White and Black Long Fur Cat'/>
  image.width = 300; // <img src='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='White and Black Long Fur Cat' width="300" />
  listItem.append(image); // <li class="..."><img ... /></li>

  list.append(listItem); // <ul><li><img /></li></ul>
  */
});

const markup = images
  .map((image) => {
    return `
        <li class="list-item">
            <img
                class="image"
                src=${image.url}
                alt=${image.alt}
            />
        </li>
    `;
  })
  .join(''); // [...] => "...";

console.log(markup);

list.insertAdjacentHTML('beforeend', markup); // [object Object];
