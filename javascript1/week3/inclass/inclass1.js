const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};
const user2 = {
  name: "Peter",
  age: 42,
  role: "Teacher",
  classes: ["Maths", "Physics"],
  hobbies: {
    favourite: "Raspberry Pi",
    sports: "Tennis",
  },
};

const users = [user, user2];
const keysToLog = ["name", "age", "hobbies"];

function renderObject(value) {
  // ...
  return "Not implemented yet";
}

function createOutput(users, keysToLog) {
  const endOfInnerLoop = "\n";
  let output = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    for (let j = 0; j < keysToLog.length; j++) {
      const key = keysToLog[j];
      const value = user[key];
      if (typeof value === "number" || typeof value === "string") {
        output += value + " ";
      } else if (typeof value === "object") {
        output += renderObject(value);
      }
    }
    output += endOfInnerLoop;
  }
  return output;
}

console.log(createOutput(users, keysToLog));

// console.log(user2.name);
// console.log(user2["name"]);
