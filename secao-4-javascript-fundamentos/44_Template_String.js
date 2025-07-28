const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!"; // Concatenação
const template = `
  Olá 
  ${nome}!`; // Template String

console.log(concatenacao);
console.log(template);

// Expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}`);
