function gerarNumeroEntre(min, max, numerosProibidos) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve, reject) => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;

    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qrdNumeros) {
  try {
    const numeros = [];

    for (let _ of Array(qrdNumeros).keys()) {
      numeros.push(await gerarNumeroEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    throw "ERRO: " + e;
  }
}

// gerarNumeroEntre(1, 5, [1, 2, 4]).then(console.log).catch(console.log);
gerarMegaSena(8).then(console.log).catch(console.log);
