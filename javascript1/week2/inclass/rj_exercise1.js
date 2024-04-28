// With pen and paper write what is logged out.
const global = "global";
function scopeTest() {
  // console.log(functionScope); // undefined ? error
  console.log(global); // global
  const functionScope = "functionScope";

  function tester() {
    console.log(global); // global

    const testerVariable = "testerVariable";
  }

  tester();
  // console.log(testerVariable); // undefined ? error
}

scopeTest();
