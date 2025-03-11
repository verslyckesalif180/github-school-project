// Function to return the current date and time
const getCurrentDateTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};

// Function to print the current date and time
const main = () => {
  console.log(getCurrentDateTime());
};

main();
