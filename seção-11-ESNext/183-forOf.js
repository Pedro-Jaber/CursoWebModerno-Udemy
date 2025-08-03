for (let letra of "Cod3r") {
  console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];

// Itera os indices
for (let index in assuntosEcma) {
  console.log(index);
}

// Itera os valores
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntoMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

console.log("* for of");
for (let assunto of assuntoMap) {
  console.log(assunto);
}

console.log("* for of keys");
for (let chave of assuntoMap.keys()) {
  console.log(chave);
}

console.log("* for of values");
for (let valor of assuntoMap.values()) {
  console.log(valor);
}

console.log("* for of entries"); // Igual a for of
for (let [chave, valor] of assuntoMap.entries()) {
  console.log(chave, valor);
}

console.log("* forEach");
assuntoMap.forEach((value, key) => {
  console.log(key, value);
});

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra);
}
