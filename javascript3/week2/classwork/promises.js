console.log("script loaded");
fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((astronauts) => {
    // console.log(astronauts);
  });

// creating a function
function logName(name) {
  //   console.log(name);
}

// using it
logName("benjamin");

const fetchPromise = fetch("http://api.open-notify.org/astros.json");
// mdn fetch
// console.log(fetchPromise);
// two functions we can call on a promise
// 1. .then: When is this function called? When the promise is resolved (when the asynchonous part is done)
// 2. .catch: When is this function called? When the promise is rejected (when there is an error)

const bla = () => {
  //   console.log(2);
};
const blaCalled = bla();
// console.log(blaCalled);

fetchPromise
  .then(() => {
    // console.log("Everything went well");
  })
  .catch(() => {
    // console.log("every thing went wrong 😮");
  });

const getAstronauts = () => fetch("http://api.open-notify.org/astros.json");

const something = getAstronauts();
// console.log(something);

// const array1 = [fetch("http://api.open-notify.org/astros.json")];
// console.log(array1[0]);

// Creating your own promise
const promise = new Promise((resolve, reject) => {
  //   console.log(typeof resolve);
  //   console.log("before timeout");

  setTimeout(() => {
    resolve("we waited for 5 seconds");
  }, 2000);

  setTimeout(() => {
    reject("REJECTION ERRORORORRORO!!!");
  }, 2000);
});

// what methods can i call on this promise?
// console.log(promise);
// promise way
promise
  .then((data) => {
    // console.log("done");
    // console.log(data);
  })
  .catch((error) => {
    // console.log(error);
  });

// async way
async function asyncAwaitExample() {
  try {
    const data = await promise;
    // console.log("done");
    console.log(data);
  } catch (error) {
    // console.log(error);
  }
}

asyncAwaitExample();
