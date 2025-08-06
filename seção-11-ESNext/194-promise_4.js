const { set } = require("lodash");

function gerarNumeroEntre(min, max, tempoSec = 2) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve) => {
    setTimeout(() => {
      const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
      resolve(aleatorio);
    }, tempoSec * 1000);
  });
}

function gerarVariosNumeros(min, max, x) {
  const promises = Array.from({ length: x }, () => {
    return gerarNumeroEntre(
      min,
      max,
      parseInt(Math.random() * (10 - 1 + 1)) + 1
    );
  });

  return Promise.all(promises);
}

console.time("promise");

gerarVariosNumeros(1, 60, 6)
  .then(console.log)
  .then(() => {
    console.timeEnd("promise");
  });
