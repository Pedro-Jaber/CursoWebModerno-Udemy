function gerarNumeroEntre(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve) => {
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    resolve(aleatorio);
  });
}

gerarNumeroEntre(1, 60)
  .then((num) => num * 10)
  .then((numx10) => `O número gerado foi ${numx10}`)
  .then(console.log);
