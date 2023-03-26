// body tag
const body = document.body
console.log(body)

// different ways of getting elements
// const notUsed = document.querySelector("h1")
const h1Tag = document.getElementById("heading")
const h1TagByClass = document.getElementsByClassName("bold")
console.log(h1Tag)
console.log(h1TagByClass)

// Change properties
h1Tag.innerText = "Soccer training Wednesday";
h1Tag.style.backgroundColor = 'blue';

// append new element to DOM
const divTag = document.createElement('div');
divTag.innerText = "new div";
document.body.appendChild(divTag)

// Change img propertie
const logo = document.getElementById('logo');
logo.src = "https://assets.fontsinuse.com/static/use-media-items/15/14246/full-2048x768/56fc6e1d/Yahoo_Logo.png?resolution=0";