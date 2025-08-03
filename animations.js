const animation = ["|", "/", "-", "\\"];
let i = 0;

while (true) {
  // \ | / -

  // Print
  process.stdout.write(`\x1B[D${animation[i % animation.length]}`);

  // Delay

  i++;
}
