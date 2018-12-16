const kittens = [{
  name: 'Oliver',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Fifi',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Bigotes',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Manchas'
}];


function changeImages() {
  let list = document.getElementById('image-list');
  let listElements = list.querySelectorAll('li');
  for (let i = 0; i < listElements.length; i++) {
    let header = document.createElement("h1");
    header.innerHTML = kittens[i].name;
    listElements[i].appendChild(header);
    let image = listElements[i].querySelector('img');
    if (kittens[i].url) {
      image.src = kittens[i].url
    }
  }
}
changeImages();

// 1. Loop through the listElements
// 2. Create an h1 element
// 3. Change the innerHTML to equal the name of kittens[i]
// 4. Append that element to the li
// 5. *IF* the url key exists in the object, change
// the src attribute of the img tag to be the
// url of kittens[i]
