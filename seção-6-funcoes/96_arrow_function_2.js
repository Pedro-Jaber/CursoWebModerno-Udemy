function Pessoa() {
  this.idade = 0;

  // Precisa do bind ou self para que this seja o objeto Pessoa
  // const self = this;
  // setInterval(
  //   function () {
  //     // this.idade++;
  //     // console.log(this.idade);
  //     self.idade++;
  //     console.log(self.idade);
  //   } /* .bind(this) */,
  //   1000
  // );

  // Não precisa nem bind nem self por ser uma arrow function
  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa();
