function pickUpKids() {
  // pickUpKids function gets pushed to call stack WHEN CALLED!
  console.log("Kids picked up");
  // pickUpKids function now gets shifted from the call stack!
}

function buyCarrots() {}

function buyVegetables() {
  buyCarrots();
}

function getGroceries() {
  // buyVegetables pushed to call stack
  buyVegetables();
  // buyVegetables shifted from call stack
}

function doWork() {}

pickUpKids();
// getGroceries pushed to call stack
getGroceries();
doWork();
