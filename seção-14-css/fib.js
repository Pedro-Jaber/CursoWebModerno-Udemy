function geraFibAteIndex(index) {
  const fib = [];
  // index = index - 1;

  for (let i = 0; i <= index; i++) {
    fib[i] = (fib[i - 1] || 1) + (fib[i - 2] || 0);
  }

  console.log(fib);
  return fib[index];
}

console.log(geraFibAteIndex(1475));
