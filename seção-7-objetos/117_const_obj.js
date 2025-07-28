//const n altera o endereço de memória

// pessoa -> #1h9f -> {...}

const pessoa = { nome: "João" }; // pessoa -> #1h29f -> {...}
pessoa.nome = "Pedro"; // pessoa.nome -> #1h29f -> {...}
console.log(pessoa);

// pessoa -> #af56 -> {...}
// pessoa = { nome: "Ana" }; // ERROR

Object.freeze(pessoa); // congelar o objeto tornando o costante
pessoa.nome = "Maria"; // não funciona
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "João" });
console.log(pessoaConstante);
