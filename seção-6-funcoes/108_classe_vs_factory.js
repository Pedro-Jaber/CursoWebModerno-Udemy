class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("Joaquim");
p1.falar();

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const p2 = criarPessoa("Joaquim");
p2.falar();
console.log(p2.nome);

// Desafio

function fPessoa(nome) {
  this.nome = nome;

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const pessoa2 = new fPessoa("Carlos");
pessoa2.falar();
console.log(pessoa2);
