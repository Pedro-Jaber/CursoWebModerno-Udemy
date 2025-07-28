// Object.preventExtensions
// Impede a adição de novos atributos

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});

console.log("Extensível:", Object.isExtensible(produto)); // false

produto.nome = "Borracha"; // tem efeito
produto.descricao = "Borracha escolar branca"; // sem efeito
delete produto.tag; // tem efeito

console.log(produto);

// Object.seal
// Impede adicionar e deletar atributos
const pessoa = { nome: "Juliana ", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa)); // true

pessoa.sobrenome = "Silva"; // sem efeito
delete pessoa.nome; // sem efeito
pessoa.idade = 29; // tem efeito

console.log(pessoa);

// Object.freeze
// Impede adicionar, modificar e deletar atributos
const carro = {
  valor: 89000,
  proprietario: "Raul",
};
Object.freeze(carro);
console.log("Congelado:", Object.isFrozen(carro));

carro.proprietario = "Ana"; // sem efeito
delete carro.proprietario; // sem efeito
carro.modelo = "A4"; // sem efeito

console.log(carro);
