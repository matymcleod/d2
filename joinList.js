/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// This is one of the better ways also .join works but below is how Compass wants us to do it.
// const joinList = function (array) {
//   return array.toString();
// }

const joinList = function(array) {
  let concepts = "";
  for (let i = 0; i < array.length; i++) {
    concepts += array[i];
    if (i < array.length - 1) {
      concepts += ", ";
    }
  }
  return concepts;
};
// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);