function getFullname(firstname, surname, useFormalName, isMale) {
  // DATA
  const malePrefix = "Mr ";
  const femalePrefix = "Mrs ";

  // Logic
  let prefix = "";
  if (useFormalName) {
    if (isMale) {
      prefix = malePrefix;
    } else {
      prefix = femalePrefix;
    }
  }

  // half rendering half logic
  return `${prefix}${firstname} ${surname}`;
}

outputName = getFullname("Benjamin", "Hughes", true, true);

// Rendering
console.log(outputName);
