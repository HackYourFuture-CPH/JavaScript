const btn = document.querySelector('button');

// Synchronous

// Asynchronous, async

setTimeout(() => {
  console.log('logged after 5 seconds');
}, 5000);


// setInterval(() => {
//   console.log('logged after 0.5 seconds');
// }, 500);


console.log('it works!');

function getRandomTimeInterval() {
  return Math.floor(Math.random() * 10000);
}

btn.addEventListener('click', () => {
  const timeout = getRandomTimeInterval();
  console.log(timeout);
  setTimeout(() => console.log('why you clicked me'), timeout);
});

const catImg = document.querySelector('img.cat');

document.body.addEventListener('mousemove', (event) => {
  catImg.style.left = `${event.clientX}px`;
  catImg.style.top = `${event.clientY}px`;
  console.log(event);
});

