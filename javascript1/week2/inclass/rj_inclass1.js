// Global scope
const globalScopeVariable = "globalScopeVariable";
function outerFunction() {
  // function scope A
  console.log(globalScopeVariable);
  const outerFunctionScope = "outerFunctionScope";

  function innerFunction() {
    // Function scope B
    console.log(globalScopeVariable);
    console.log(outerFunctionScope);

    const innerFunctionScope = "innerFunctionScope";
  }

  // console.log(innerFunctionScope);

  innerFunction();
}

outerFunction();

if (true) {
  const blockScope = "blockScope";
}

console.log(blockScope);
