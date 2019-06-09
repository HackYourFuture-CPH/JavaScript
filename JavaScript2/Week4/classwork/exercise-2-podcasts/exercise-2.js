/**
### Podcast
1. Create a `ul`
2. Loop through the podcasts
3. For every podast:
   1. Creat an `li`
   2. Create an `h1` element
   3. Change the innerHTML of hte `h1` to equal the name of the current podcast
   4. Append the `h1` to the `li`
   5. Now add an image to the `li` with the `src` set to the `imageUrl`. But only if the `imageUrl` key exists on the object!
4. Append the `li` to the `ul`
 */

const podcasts = [
  {
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
  },
  {
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/354/536'
  },
  {
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/280/354'
  },
  {
    name: 'Breakfast news - Dinner edition'
  }
];

const ul = document.querySelector('.podcast-list');

for (const pod of podcasts) {
  const li = document.createElement('li');

  const h1 = document.createElement('h1');
  h1.innerHTML = pod.name;
  li.appendChild(h1);

  if (pod.imageUrl) {
    const img = document.createElement('img');
    img.src = pod.imageUrl;
    li.appendChild(img);
  }

  ul.appendChild(li);
}
