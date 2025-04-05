// This is a sample TypeScript code snippet.
// It demonstrates how to create and modify arrays,
// as well as the use of `for` loop to iterate over an array.

// Creating an array
let myArray: number[] = [1, 2, 3, 4, 5];

// Modifying an existing array
myArray[2] = 6;
console.log(myArray); // Output: [1, 2, 3, 4, 6]

// Using a for loop to iterate over the array
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Accessing an element by index
console.log(myArray[5]); // Output: 6

// Checking if an item exists in the array
if (myArray.includes(6)) {
    console.log("The number 6 is present in the array.");
} else {
    console.log("The number 6 is not present in the array.");
}
