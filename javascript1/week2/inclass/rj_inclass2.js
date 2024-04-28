function spam(number) {
  let repeated = ""; // Define the simplest case

  // Think about the condition. How many times do we want to repeat
  for (let i = 0; i < number; i++) {
    repeated = repeated + "hue"; // What is our update rule
  }

  return repeated; // Return in the end
}

console.log(spam(1));

// Test cases. I always do "empty" (here zero), once, and then a bunch of times
console.log(spam(0) === "");
console.log(spam(1) === "hue");
console.log(spam(6) === "huehuehuehuehuehue");
console.log(spam(14) === "huehuehuehuehuehuehuehuehuehuehuehuehuehue");
