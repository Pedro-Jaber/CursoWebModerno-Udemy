const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
  console.log(array.slice(indice + 1));
});

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (aprovado, indice) =>
  console.log(`${indice + 1}° ${aprovado}`);
aprovados.forEach(exibirAprovados);
