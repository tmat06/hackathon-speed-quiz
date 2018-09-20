// Given an array of integers, find the maximal absolute difference
// between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

// You can only make one change on one line!

////////////////////////////////////////////////////////

// Test Samples

// Input: [2, 4, 1, 0]

// Expecting: 3

// Currently Receiving: 1

//-------------------------------------------

// Input: [-1, 4, 10, 3, -2]

// Expecting: 7

// Currently Receiving: 5

//-------------------------------------------

// Input: [-1, 1, -3, -4]

// Expecting: 4

// Currently Receiving: 1

//-------------------------------------------

export default function arrayMaximalAdjacentDifference(inputArray) {
  var dif = inputArray[0] - inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      if (inputArray[i] - inputArray[i + 1] < dif) {
        dif = inputArray[i] - inputArray[i + 1];
      }
    } else if (inputArray[i] < inputArray[i + 1]) {
      if (inputArray[i + 1] - inputArray[i] > dif) {
        dif = inputArray[i + 1] - inputArray[i];
      }
    }
  }
  console.log(dif);
  return dif;
}
