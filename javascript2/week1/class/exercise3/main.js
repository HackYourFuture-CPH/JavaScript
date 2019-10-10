function insertImage(imageUrl, elementToAppendImageTo) {
    const img = document.createElement('img');
    img.src = imageUrl;
    elementToAppendImageTo.appendChild(img);
}

insertImage('https://picsum.photos/536/354', document.body);
