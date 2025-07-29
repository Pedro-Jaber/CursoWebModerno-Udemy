// Aula
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// Meu
// Object.defineProperty(aprovados, "forEach2", {
//   value: function (callback) {
//     for (let index = 0; index < this.length; index++) {
//       callback(this[index], index, this);
//     }
//   },
// });

aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
  console.log(array.slice(indice + 1));
});

aprovados.forEach2(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
  console.log(array.slice(indice + 1));
});
