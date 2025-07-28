// par nome/valor
const saudacao = "Opa"; // Contexto lexicamente
function exec() {
  const saudacao = "Falaa"; // Contexto lexicamente
  return saudacao;
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
