function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com " + nota);
  }
}

soBoaNoticia(9); // Aprovado com 9
soBoaNoticia(6.99); // nada

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade... " + valor);
  }
}

// seForVerdadeEuFalo(); // Nada
// seForVerdadeEuFalo(null); // Nada
// seForVerdadeEuFalo(undefined); // Nada
// seForVerdadeEuFalo(NaN); // Nada
// seForVerdadeEuFalo(""); // Nada
// seForVerdadeEuFalo(0); // Nada
// seForVerdadeEuFalo(-1); // É verdade... -1
// seForVerdadeEuFalo(" "); // É verdade...
// seForVerdadeEuFalo("?"); // É verdade... ?
// seForVerdadeEuFalo([]); // É verdade...
// seForVerdadeEuFalo([1, 2]); // É verdade...
// seForVerdadeEuFalo({}); // É verdade...

function teste1(num) {
  if (num > 7) console.log(num);
  console.log("Final");
}

teste1(6);
teste1(8);
