const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
  if (x == 5) {
    break; // para o loop
  }
  console.log(`${x} = ${nums[x]}`);
}

for (y in nums) {
  if (y == 5) {
    continue; // pula para o proxima iteração
  }
  console.log(`${y} = ${nums[y]}`);
}

// Rotula o loop
externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo; // Quebra o loop rotulado externo
    console.log(`Par = ${a},${b}`);
  }
}
