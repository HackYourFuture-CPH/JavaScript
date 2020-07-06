console.log("script loaded");

// async function logAStronauts() {
//   try {
//     const response = await fetch("http://api.open-notify.org/astros.json");
//     const astronauts = await response.json();
//     console.log(astronauts);
//   } catch (error) {
//     console.log(error);
//   }
// }

// logAStronauts();

fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((astronauts) => {
    // console.log(astronauts);
  })
  .catch((error) => {
    console.log(error);
  });

// fetch("http://ahjsdbhjas.asjdk");

// const promise = new Promise((resolve, reject) => {
//   resolve("ahjsdbhjbj");
// });

// promise.then((string) => {
//   console.log(string);
// });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(new Response({ test: 2 }));
  }, 4000);
});

promise
  .then((helloString) => {
    // console.log(helloString);
  })
  .catch((error) => {
    // console.log(error);
  });

function getLoggedInUsers() {
  return new Promise((resolve, reject) => {
    // 1. figure out how to make a random boolean - check
    // 2. make an if sentence based on the boolean - check
  });
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("test string");
  }, 4000);
});

const promiseAll = Promise.all([
  promise2,
  fetch("http://api.open-notify.org/astros.json"),
]);

promiseAll.then((data) => {
  console.log(data[0]);
  console.log(data[1]);

  console.log("all resolved");
});
