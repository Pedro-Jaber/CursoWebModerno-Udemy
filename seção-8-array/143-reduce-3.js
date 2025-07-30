// Array.prototype.reduce2 = function (callback, initValue = null) {
//   let acumulador = initValue;
//   for (let i = 0; i < this.length; i++) {
//     if (acumulador) acumulador = callback(acumulador, this[i], i, this);
//     else {
//       i++;
//       acumulador = callback(this[i - 1], this[i], i, this);
//     }
//   }
//   return acumulador;
// };

Array.prototype.reduce2 = function (callback, initValue) {
  const initI = initValue ? 0 : 1;
  let acumulador = initValue || this[0];
  for (let i = initI; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma));

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

console.log(alunos.map((a) => a.nota));
const resultado = alunos
  .map((a) => a.nota)
  .reduce2(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  });

console.log(resultado);

// Desafio 1: Todos os alunos sao bolsistas?
const bolsista = alunos
  .map((a) => a.bolsista)
  .reduce2((acumulador, atual) => acumulador && atual);
console.log("Desafio 1: Todos os alunos sao bolsistas?", bolsista);

// Desafio 2: Algum aluno é bolsista?
const bolsista2 = alunos
  .map((a) => a.bolsista)
  .reduce2((acumulador, atual) => acumulador || atual);
console.log("Desafio 2: Algum aluno é bolsista?", bolsista2);
