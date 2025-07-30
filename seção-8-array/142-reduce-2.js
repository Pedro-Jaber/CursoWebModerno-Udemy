const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos sao bolsistas?
const bolsista = alunos
  .map((a) => a.bolsista)
  .reduce((acumulador, atual) => acumulador && atual);
console.log("Desafio 1: Todos os alunos sao bolsistas?", bolsista);

// Desafio 2: Algum aluno é bolsista?
const bolsista2 = alunos
  .map((a) => a.bolsista)
  .reduce((acumulador, atual) => acumulador || atual);
console.log("Desafio 2: Algum aluno é bolsista?", bolsista2);
