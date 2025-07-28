class obj {
  constructor(nome) {
    this.nome = nome;
    this.a = 1;
    this.b = 2;
  }
  meuNome() {
    console.log(`Meu nome é ${this.nome}`);
  }

  _this(obj) {
    console.log(this === obj);
  }
}

const obj1 = new obj("Carlinhos");
obj1.meuNome();
obj1._this(obj1);

// // // // //

const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar(); // Bom dia! (this == pessoa)
const falar = pessoa.falar; // atribui uma função com this a uma variável
falar(); // undefined | const falar n possui this.saudacao (this == global)

saudacao = "Boa noite!"; // adiciona saudacao no escopo global
falar(); // this.saudacao = "boa noite"

const falarDePessoa = pessoa.falar.bind(pessoa); // amarra a função pessoa.falar ao objeto pessoa
falarDePessoa();

// // // // //

function Pessoa2() {
  this.idade = 0;

  // Precisa do bind ou self para que this seja o objeto Pessoa
  const self = this;
  setInterval(
    function () {
      // this.idade++;
      // console.log(this.idade);
      self.idade++;
      console.log(self.idade);
    } /* .bind(this) */,
    1000
  );

  // Não precisa nem bind nem self por ser uma arrow function
  // setInterval(() => {
  //   this.idade++;
  //   console.log(this.idade);
  // }, 1000);
}

new Pessoa2();
