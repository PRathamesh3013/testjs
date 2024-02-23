//Write a code to Remove the spaces found in a string

const stringSpace = "Hello, world! ";

function removeSpaces(str) {
  return str.replace(/\s/g, "");
}

const stringNot = removeSpaces(stringSpace);
console.log(stringNot);