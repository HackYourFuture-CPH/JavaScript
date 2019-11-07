const jsonString = `
  {
    "foo": "bar",
    "a": {
      "b": "c"
    },
    "n": 42,
    "b": true,
    "c": false,
    "d": [
      "Rasmus",
      "Hansen"
    ],
    "e": null,
    "f": "" 
  }
`;

console.log(jsonString);

const value = JSON.parse(jsonString);

console.log(value);
console.log(value.foo);

const myValue = {
  name: "Rasmus",
  likes: "Programming"
};

const reverseJsonString = JSON.stringify(myValue, null, "  ");
console.log(reverseJsonString);

// -----------------------------------------------

// Use in IE 11
const request = new XMLHttpRequest();
request.addEventListener("load", () => {
  const response = JSON.parse(request.responseText);
  console.log("response 1", response);

  const request2 = new XMLHttpRequest();
  request2.addEventListener("load", () => {
    const response2 = JSON.parse(request.responseText);
    console.log("response2", response2);
  });
  request2.open(
    "GET",
    `https://deckofcardsapi.com/api/${response.deck_id}/new`
  );
  request2.send();
});
request.open(
  "GET",
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
);
request.send();



const s = 'rasmus';
const result = `foo ${s} bar`;
const result = 'foo ' + s + ' bar';

// Use in everything else
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
  .then(response => response.json())
  .then(response => {
    console.log("first response", response);
  });
