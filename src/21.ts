function main() {
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];

  data.sort((a, b) => a.age - b.age);
}

main();
