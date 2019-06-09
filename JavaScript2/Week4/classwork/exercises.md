## Exercises

### Favorite dishes
Create an array of strings with your favorite dishes.

With js select a `ul` in the DOM. You add the `ul` to the html file.

Now loop through each element of the favorite dishes array, you create an `li` element and set the text to the favorite dish.

Then append the `li` element to the `ul` element.

### Podcast

```js
const podcasts = [{
        name: 'The mystery om of Johan Klausen Varbourg',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'Tips about dogs with small legs',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'You, me, we and us',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'Breakfast news - Dinner edition'
    }
];
```
1. Create a `ul`
2. Loop through the podcasts
3. For every podast:
   1. Creat an `li`
   2. Create an `h1` element
   3. Change the innerHTML of hte `h1` to equal the name of the current podcast
   4. Append the `h1` to the `li`
   5. Now add an image to the `li` with the `src` set to the `imageUrl`. But only if the `imageUrl` key exists on the object!
4. Append the `li` to the `ul`

### Image inserter

Create a function that has two parameters: `imageUrl` and `elementToAppendImageTo`. The function should create a img tag using the `imageUrl` parameter. The function should then append the `img` to the `elementToAppendImageTo` - html element.

```js
// Should append a img tag to the body with the picture from 'https://picsum.photos/536/354'
notThisFunctionName('https://picsum.photos/536/354', document.querySelector('body'));

```

### Simple eventlistener
When clicking a button, change the text on the button to say "Button clicked"

### Light mode dark mode
Clicking a button should toggle the background color of the body and the text color in the page.
If the background is white and the text is black, then clicking the button will make the background dark and the text white and vice versa

*Optional* also make the text on the button change.