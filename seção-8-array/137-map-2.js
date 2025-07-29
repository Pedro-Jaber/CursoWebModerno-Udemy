const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retonar um array apenas com os preços

//Meu
const precos = carrinho.map((itemJson) => {
  const obj = JSON.parse(itemJson);
  return obj.preco;
});

console.log(precos);

//Aula

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
