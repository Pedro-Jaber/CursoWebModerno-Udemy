function soma() {
  let soma = 0;
  // arguments é um objeto com todos os argumentos passados
  console.log(arguments);
  console.log([...arguments]);

  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2));
console.log(soma(1, 2, 3));
console.log(soma(4, 3, 2, 1));
