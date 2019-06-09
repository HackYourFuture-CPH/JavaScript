const myHeading = document.querySelector('h1');

console.log(myHeading);

// Change css class
// myHeading.className = 'red-bg';

myHeading.innerHTML = '<a href="https://google.com" target="_blank">Go to Google</a>';

// const img = document.createElement('img');
// img.src = 'https://media.giphy.com/media/10bdAP4IOmoN7G/giphy.gif';
// document.body.appendChild(img);


const gifUrls = [
  'https://media.giphy.com/media/10bdAP4IOmoN7G/giphy.gif',
  'https://media.giphy.com/media/5ntdy5Ban1dIY/giphy.gif',
  'https://media.giphy.com/media/eAmyMAJYxxufu/giphy.gif',
];

for (const url of gifUrls) {
  const img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);

}
