// console.log('Promise 2')
//
// const promise = new Promise((resolve, reject) => {
//     // resolve()
//     reject()
// })
//
// promise
//     .then(() => console.log('first then'))
//     .then(() => console.log('second then'))
//     .then(() => console.log('third then'))
//     .catch(() => console.log('error'))
//     .then(() => console.log('I am always called, even when there is an error'))
//
// promise.catch(() => {
//     console.log('error')
// })

/*
function Promise() {
    return
    {
        then: () => {
            return Promise();
        },
        catch: () => {
            return Promise();
        }
    }
}
*/

// Using Promises

function waitThreeSec() {
    return new Promise((resolve) => {
        setTimeout(resolve,3000);
    })
}

const url1 ='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
const url2 ='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
const url3 ='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

let myMovies = [];

const promise1 = fetch(url1)
    .then((response) => response.json())
    .then(() => waitThreeSec())
    .then(() => console.log("hello"))
    .catch((error) => console.log(error))

const promise2 = fetch(url2).then((response) => response.json())
const promise3 = fetch(url3).then((response) => response.json())

Promise.all([promise2, promise3])
    .then((array) => {
        array.forEach((movies) => {
            adMovies(movies);
        })
    })
    .catch(error => console.log(error))

function adMovies(movies) {
    movies.forEach((movie) => {
        myMovies.push(movie);
    })
    console.log(myMovies)
}
