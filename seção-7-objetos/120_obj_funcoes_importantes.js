const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log("keys:", Object.keys(pessoa)); // retorna as chaves
console.log("values:", Object.values(pessoa)); // retorna os valores
console.log("entries:", Object.entries(pessoa)); // retorna os pares

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// Simples
// obj.property = valor

// Avançado
//Object.defineProperty(obj, "property", {settings})
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true, // mostra a chave
  writable: false, // pode ser alterado
  value: "01/01/2019",
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ES2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
// Object.assign(obj1, ..., objN) | obj1 ira receber os valores de objN
const obj = Object.assign(dest, o1, o2);
console.log(obj);

// Object.freeze
Object.freeze(obj);
obj.c = 1234;
console.log(obj);
