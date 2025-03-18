// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to get a random color from an array of colors
function getRandomColor(colors: string[]) {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Example usage of the above functions
const randomNumber = getRandomNumber();
console.log(`A random number between 1 and 10 is ${randomNumber}`);

const randomColor = getRandomColor(['red', 'green', 'blue']);
console.log(`A random color is ${randomColor}`);
