const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); // callback
fabricantes.forEach((fabricante) => console.log(fabricante)); // callback

// Ao encontrar um item o forEach chama o callback
