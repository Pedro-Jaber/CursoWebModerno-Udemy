const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

// console.log(tecnologias.react); // undefined
console.log(tecnologias.get("react")); // {framework: false}
console.log(tecnologias.get("react").framework); // false

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Numero"],
]);

chavesVariadas.forEach((value, key) => {
  console.log(key, value);
});

console.log(chavesVariadas.has(123)); // true
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123)); // false
console.log(chavesVariadas.size);

chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b");
console.log(chavesVariadas);

chavesVariadas.set(456, "b");
console.log(chavesVariadas);
