//Calculate the sum of numbers within an array
const numbers = [30, 13, 25, 10, 99];

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

const sum = calculateSum(numbers);
console.log("Sum:", sum);