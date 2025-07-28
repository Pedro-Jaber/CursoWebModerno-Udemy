let valor; // não inicializada = undefined
console.log(valor);
// console.log(valor2); // valor não declarado = Error: is not defined

valor = null; // ausencia de valor
console.log(valor);
// console.log(valor.toString()); // Error: is not a function

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null; // sem precos
console.log(!!produto.preco);
console.log(produto);
