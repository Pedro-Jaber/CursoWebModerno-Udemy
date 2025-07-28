// novo recurso do ES2015

//* Objetos
console.log("Objetos");
const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

console.log(pessoa);

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; // bemHumorada com valor default
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep },
} = pessoa; // desestruturando o endereco
console.log(logradouro, numero, cep);

//* Array
console.log("Arrays");
const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8],
];
console.log(nota);

//* Funções objetos
console.log("Funções objetos");
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));
// console.log(rand()); // error

//* Funções array
console.log("Funções array");
function rand2([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]; // Invertendo os valores
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand2([50, 40]));
console.log(rand2([992]));
console.log(rand2([, 10]));
console.log(rand2([]));
// console.log(rand()); // error
