function getInteroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

// let opcao = -1;
let opcao;

do {
  opcao = getInteroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1);

console.log("Ate logo!");
