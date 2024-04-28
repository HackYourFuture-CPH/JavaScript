// Todo: Create an if sentence that will give a user a message based on his bank account balance. Use the balance variable and change that.

const balance = NaN;
if (balance <= 0) {
  // If a user has 0 or less balance log out 'Please deposit some money!'
  console.log("Please deposit some money!");
  // If a user has more than 0 and at most 1000 log out 'Your balance is looking okay'
} else if (balance <= 1000) {
  console.log("Your balance is looking okay");
  // If a user has more than 1000 and at most 3000 log out 'Your balance is looking good'
} else if (balance <= 3000) {
  console.log("Your balance is looking good");
  // If a user has more than 3000 and at most 10000 log out 'Your balance is fantastic'
} else if (balance <= 10000) {
  console.log("Your balance is fantastic");
  // If a user has more than 10000 log out 'Your balance is AMAZING!'
} else if (10000 < balance) {
  console.log("Your balance is AMAZING!");
} else {
  console.log("Sorry we cant help you");
}
