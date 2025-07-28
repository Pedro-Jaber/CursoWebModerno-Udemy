// 01
function operacoes(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
}
operacoes(12, 3);

//02

// Equilátero | 3 lados iguais
// Isósceles | 2 lados iguais
// Escaleno | 0 lados iguais
function classificaTriangulo(a, b, c) {
  const ladoTriangulo = {};

  ladoTriangulo[a] = a;
  ladoTriangulo[b] = b;
  ladoTriangulo[c] = c;

  // console.log(ladoTriangulo);
  // console.log(Object.keys(ladoTriangulo).length);

  if (Object.keys(ladoTriangulo).length == 1) {
    console.log("▲ Equilátero");
  } else if (Object.keys(ladoTriangulo).length == 2) {
    console.log("▲ Isósceles");
  } else {
    console.log("▲ Escaleno");
  }
}

classificaTriangulo(1, 2, 3);
classificaTriangulo(2, 2, 3);
classificaTriangulo(3, 3, 3);
classificaTriangulo(1, 2, 2);

// 03
function pow(x, y) {
  return x ** y;
}

console.log("pow: ", pow(1, 2));
console.log("pow: ", pow(2, 2));
console.log("pow: ", pow(3, 2));
console.log("pow: ", pow(3, 3));

//04
function divComResto(x, y) {
  return [x / y, x % y];
}

console.log("divComResto: ", divComResto(1, 2));
console.log("divComResto: ", divComResto(3, 2));
console.log("divComResto: ", divComResto(4, 2));
console.log("divComResto: ", divComResto(49, 7));
console.log("divComResto: ", divComResto(13, 4));

//05

function toReal(x) {
  return `R$${x
    .toFixed(2)
    .replace(".", "*")
    .replace(",", ".")
    .replace("*", ",")}`;
}

console.log(toReal(3.400000003));
console.log(toReal(2.1981621));
console.log(toReal(1.45198));
console.log(toReal(5.0));
console.log(toReal(10));

//08
function MelhorPiorJogo(x) {
  const lista = x.split(" ");
  console.log(lista);

  let pontosAnterior = parseInt(lista[0]);

  let piorJogoIndex = 0;
  let piorJogoPontos = 9999;

  let quantidadeDeRecordes = 0;

  lista.forEach((pontos) => {
    console.log("=======");
    console.log("pontos: ", pontos);
    console.log("pontosAnterior: ", pontosAnterior);
    console.log("piorJogoIndex: ", piorJogoIndex);
    console.log("piorJogoPontos: ", piorJogoPontos);
    console.log("quantidadeDeRecordes: ", quantidadeDeRecordes);
    console.log("=======");

    if (pontos > pontosAnterior) {
      quantidadeDeRecordes++;
    }

    if (pontos < piorJogoPontos) {
      piorJogoPontos = parseInt(pontos);
      piorJogoIndex = lista.indexOf(pontos);
    }

    pontosAnterior = parseInt(pontos);
  });

  return [quantidadeDeRecordes, piorJogoIndex];
}

console.log(MelhorPiorJogo("10 20 20 8 25 30 30 1"));
