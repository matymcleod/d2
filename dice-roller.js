// input value from command line
let args = process.argv.slice(2);
// Defines args as a number, will output NaN if anything other than a number is input
let input = Number(args);
// take input value from args and generate a random number between 1 - 6 by input value
const diceRoller = function(rolls) {
  // Stores the number of rolls and the results from the random variable
  let result = `You rolled ${rolls} dice and got: `;
  // Loops a number input and calls randNum function as many times as the input argument
  for (let i = 0; i < rolls; i++) {
    let random = randNum();
    // Adds the random number to the end of result variable
    result += random;
    // If not the last number add a comma and a space between each random number
    if (i < rolls - 1) {
      result += ", ";
    }
  }
  return result;
};

const randNum = function() {
  return Math.floor(Math.random() * 6 + 1);
};

console.log(diceRoller(input));