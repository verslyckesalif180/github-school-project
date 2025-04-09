// This is a sample TypeScript code to demonstrate various functionalities.
// Feel free to modify it as per your project's requirements.

// Function to calculate Fibonacci sequence
function fibonacci(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1, nextTerm;
    for (let i = 2; i <= n; i++) {
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return b;
}

// Function to calculate sum of squares
function squareSum(a: number): number {
    let sum = 0;
    for (let i = a; i >= 1; i--) {
        sum += i * i;
    }
    return sum;
}

// Main function to test the examples
const testCases: [number, number][] = [
    [5, 5],
    [10, 385]
];

testCases.forEach(([index, expected]) => {
    const result = fibonacci(index);
    console.log(`Test ${index}: Expected ${expected}, got ${result}`);
    if (result === expected) {
        console.log(`${' ✓ ' + 'Correct! (' + index + ')'}`);
    } else {
        console.log(`${' X ' + 'Incorrect!' + (index > 1 ? `, (${Math.abs(expected - result)} too)` : '')}`.trim());
    }
});

// Example usage
const n = 5;
console.log(`Fibonacci number for ${n} is: ${fibonacci(n)}`);
console.log(`Sum of squares up to ${n}: ${squareSum(n)}`);

