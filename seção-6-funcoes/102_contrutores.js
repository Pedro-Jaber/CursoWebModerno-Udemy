function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0;

  // metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  // metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);

/* teste class
class Bicicleta {
  velocidadeAtual = 0;

  constructor(velocidadeMaxima = 20, delta = 1) {
    this.velocidadeMaxima = velocidadeMaxima;
    this.delta = delta;
  }

  acelerar() {
    if (this.velocidadeAtual + this.delta <= this.velocidadeMaxima) {
      this.velocidadeAtual += this.delta;
    } else {
      this.velocidadeAtual = this.velocidadeMaxima;
    }
  }

  getVelocidadeAtual() {
    return this.velocidadeAtual;
  }
}

const bmx = new Bicicleta(60, 2);
bmx.acelerar();
console.log(bmx.getVelocidadeAtual());
 */
