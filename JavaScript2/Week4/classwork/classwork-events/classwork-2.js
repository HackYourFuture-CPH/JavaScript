const myBtn = document.querySelector('button.myBtn');
console.log(myBtn);

const thumbnailList = document.querySelector('div.thumbnail-list');
console.log(thumbnailList);

function myButtonClickHandler() {
  console.log('Why did you click me?');

  const url = 'https://picsum.photos/50/50';
  const img = document.createElement('img');
  img.src = url;
  img.className = 'thumbnail';
  thumbnailList.appendChild(img);
}

myBtn.addEventListener('click', myButtonClickHandler);


const nameInput = document.querySelector('#nameInput');

function mouseEnterHandler() {
  console.log('your mouse is here');
  nameInput.style.background = '#dedede';
}

function mouseLeaveHandler() {
  console.log('your mouse has left');
  nameInput.style.background = '#fff';
}

// nameInput.addEventListener('mouseenter', mouseEnterHandler);
// nameInput.addEventListener('mouseleave', mouseLeaveHandler);

function inputChangeHandler() {
  console.log('I was changed');
  console.log('new value is', nameInput.value);
}

nameInput.addEventListener('change', inputChangeHandler);