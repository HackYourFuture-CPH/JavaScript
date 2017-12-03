// basic promise example
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//     }, 500)

//     setTimeout(() => {
//         reject("error");
//     }, 400)
// });

// console.log(promise);
promise.then(
    x => console.log(promise), // resolve
    x => console.log(promise) //reject
)
// console.log("After promise then");

const movieUrl = 'https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json';

function getAjaxData(url){
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url);

        request.onload = () => resolve(request.responseText);
        request.onerror = () => reject(request.statusText);
        request.send();
    });
}

getAjaxData(movieUrl)
.then(main, main); // onResolve, onReject

function main(x){
    console.log(x);
}
