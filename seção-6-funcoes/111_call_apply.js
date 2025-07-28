function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

console.log(getPreco()); // Global | preco and desc is not defined

global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); // Global | preco and desc is defined

console.log(produto.getPreco()); // Produto | preco and desc is defined

// Call and Apply

const carro = { preco: 49990, desc: 0.2 };

// Call and Apply | pega uma função com closure Global e define no objeto passado para call()
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// Call params: (contexto, ...functionArgs)
console.log(getPreco.call(carro, 0.17, "$"));

// Apply params: (contexto, [...functionArgs])
console.log(getPreco.apply(global, [0.17, "$"]));

console.log(2 > "11");
console.log("2" > "11");
console.log("2" > 11);
